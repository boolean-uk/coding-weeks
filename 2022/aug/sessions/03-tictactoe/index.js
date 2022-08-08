const state = {
    gameElement: document.querySelector('.game'),
    symbols: ['o', 'x'],
    // cells: [null, null, null, null, null, null, null, null, null]
    cells: Array(9).fill(null),
    winningCombinations: [
        [0,1,2], // row
        [3,4,5], // row
        [6,7,8], // row
        [0,3,6], // column
        [1,4,7], // column
        [2,5,8], // column
        [0,4,8], // diagonal
        [2,4,6]  // diagonal
    ],
    gameFinished: false
}

function drawBoard() {
    state.gameElement.innerHTML = ''

    for (let i = 0; i < state.cells.length; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (state.cells[i]) {
            const cellSymbol = document.createElement('p')
            cellSymbol.innerText = state.cells[i]
            cellSymbol.classList.add('symbol')
            cell.append(cellSymbol)
        } else {
            cell.addEventListener('click', function () {
                if (state.gameFinished) {
                    return
                }

                state.symbols.reverse()
                const currentPlayerSymbol = state.symbols[0]
    
                state.cells[i] = currentPlayerSymbol
    
                drawBoard()

                if (checkForWinner()) {
                    drawMessage(`${state.symbols[0]} won!`)
                    state.gameFinished = true
                    return
                }

                if (checkForDraw()) {
                    drawMessage('Draw!')
                    state.gameFinished = true
                }
            })
        }

        state.gameElement.append(cell)
    }
}

function checkForWinner() {
    return state.winningCombinations.some(combo => {
        const cells = combo.map(index => state.cells[index])

        return !(cells.includes(null)) && new Set(cells).size === 1
    })
}

function checkForDraw() {
    return state.cells.every(cell => cell !== null)
}

function drawMessage(message) {
    const banner = document.createElement('div')
    banner.classList.add('banner')

    const h1 = document.createElement('h1')
    h1.innerHTML = message
    banner.append(h1)

    state.gameElement.append(banner)
}

drawBoard()
