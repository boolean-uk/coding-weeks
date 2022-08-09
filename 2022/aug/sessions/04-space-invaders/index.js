const state = {
  numCells: (600 / 40) * (600 / 40),
  cells: [],
  aliens: [
    3, 4, 5, 6, 7, 8, 9, 10,11,
    18,19,20,21,22,23,24,25,26,
    33,34,35,36,37,38,39,40,41,
    48,49,50,51,52,53,54,55,56
  ],
  shipPosition: 217,
  score: 0
}

const setupGame = (element) => {
  state.element = element
  drawGrid()
  drawShip()
  drawAliens()
  drawScoreboard()
}

const play = () => {
  // add alien interval
  let interval
  let direction = 'right'

  interval = setInterval(() => {
    let movement

    if (atSide('left') && direction === 'left') {
      // move down and right
      movement = 15 + 1
      direction = 'right'
    } else if (atSide('right') && direction === 'right') {
      // move down and left
      movement = 15 - 1
      direction = 'left'
    } else {
      // move in current direction
      if (direction === 'left') {
        movement = -1
      }
      if (direction === 'right') {
        movement = 1
      }
    }

    state.aliens.forEach((position, index) => {
      state.aliens[index] = position + movement
    })

    checkGameState(interval)
    drawAliens()
  }, 400);

  window.addEventListener('keydown', controlShip)
}

const atSide = (side) => {
  if (side === 'left') {
    return state.aliens.some(position => position % 15 === 0)
  } else if (side === 'right') {
    return state.aliens.some(position => position % 15 === 14)
  }
}

const drawGrid = () => {
  const grid = document.createElement('div')
  grid.classList.add('grid')

  state.grid = grid
  state.element.append(grid)

  state.cells = Array(state.numCells).fill(null).map(i => {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    grid.append(cell)
    return cell
  })
}

const drawShip = () => {
  state.cells[state.shipPosition].classList.add('spaceship')
}

const drawAliens = () => {
  state.cells.forEach((cell, index) => {
    if (cell.classList.contains('alien')) {
      cell.classList.remove('alien')
    }
    if (state.aliens.includes(index)) {
      cell.classList.add('alien')
    }
  })
}

const controlShip = (event) => {
  if (state.gameover) return

  if (event.code === 'ArrowLeft') {
    moveShip('left')
  } else if (event.code === 'ArrowRight') {
    moveShip('right')
  } else if (event.code === 'Space') {
    fire()
  }
}

const moveShip = (direction) => {
  state.cells[state.shipPosition].classList.remove('spaceship')
  if (direction === 'left') {
    state.shipPosition--
  } else if (direction === 'right') {
    state.shipPosition++
  }
  state.cells[state.shipPosition].classList.add('spaceship')
}

const fire = () => {
  let laserPosition = state.shipPosition
  let interval

  interval = setInterval(() => {
    state.cells[laserPosition].classList.remove('laser')
    laserPosition -= 15

    if (laserPosition < 0) {
      clearInterval(interval)
      return
    }

    if (state.aliens.includes(laserPosition)) {
      state.aliens.splice(state.aliens.indexOf(laserPosition), 1)
      state.cells[laserPosition].classList.remove('alien')
      state.cells[laserPosition].classList.add('hit')
      state.score++
      state.scoreElement.innerText = state.score
      setTimeout(() => {
        state.cells[laserPosition].classList.remove('hit')
      }, 200)
      clearInterval(interval)
      return
    }

    state.cells[laserPosition].classList.add('laser')
  }, 100)
}

const checkGameState = (interval) => {
  if (state.aliens.length === 0) {
    state.gameover = true
    clearInterval(interval)
    drawMessage("HUMAN WINS!")
  } else if (state.aliens.some(alien => alien >= state.shipPosition)){
    clearInterval(interval)
    state.gameover = true

    state.cells[state.shipPosition].classList.remove('spaceship')
    state.cells[state.shipPosition].classList.add('hit')

    drawMessage("GAME OVER!")
  }
}

const drawMessage = (message)  => {
  const banner = document.createElement('div')
  banner.classList.add('banner')

  const h1 = document.createElement('h1')
  h1.innerHTML = message
  banner.append(h1)

  state.element.append(banner)
}

const drawScoreboard = (element) => {
  const heading = document.createElement("h1")
  heading.innerText = 'Space Invaders'
  const paragraph1 = document.createElement("p")
  paragraph1.innerText = 'Press SPACE to shoot.'
  const paragraph2 = document.createElement("p")
  paragraph2.innerText = 'Press ← and → to move'
  const scoreboard = document.createElement('div')
  scoreboard.classList.add('scoreboard')
  const scoreElement = document.createElement('span')
  scoreElement.innerText = state.score
  const heading3 = document.createElement('h3')
  heading3.innerText = 'Score: '
  heading3.append(scoreElement)
  scoreboard.append(heading, paragraph1, paragraph2, heading3)

  state.scoreElement = scoreElement
  state.element.append(scoreboard)
}

const appElement = document.querySelector('.app')
setupGame(appElement)
play()
