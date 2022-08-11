const scoreboard = document.querySelector('.scoreboard')

const stagesElement = document.createElement('ul')
stagesElement.classList.add('stages')

const stages = [
  '0-start',
  '1-outline',
  '2-create-grid',
  '3-drawShip',
  '4-moveShip',
  '5-fire',
  '6-aliens-can-be-hit',
  '7-aliens-move',
  '8-game-can-end',
  '9-scoreboard'
]

stages.forEach((stage, index) => {
  const stageElement = document.createElement('li')
  stageElement.classList.add('stage')

  const stageName = document.createElement('span')
  stageName.innerText = `${stage}`

  const linkHTML = document.createElement('a')
  linkHTML.setAttribute('href', `https://github.com/boolean-uk/space-invaders-demo/blob/${stage}/index.html`)
  linkHTML.setAttribute('target', '_blank')
  linkHTML.innerText = 'html'

  const linkCSS = document.createElement('a')
  linkCSS.setAttribute('href', `https://github.com/boolean-uk/space-invaders-demo/blob/${stage}/main.css`)
  linkCSS.setAttribute('target', '_blank')
  linkCSS.innerText = 'css'

  const linkJS = document.createElement('a')
  linkJS.setAttribute('href', `https://github.com/boolean-uk/space-invaders-demo/blob/${stage}/index.js`)
  linkJS.setAttribute('target', '_blank')
  linkJS.innerText = 'js'

  stageElement.append(stageName, linkHTML, linkCSS, linkJS)

  if (index > 0) {
    const diff = document.createElement('a')
    diff.setAttribute('href', `https://github.com/boolean-uk/space-invaders-demo/pull/${index}/files`)
    diff.setAttribute('target', '_blank')
    diff.innerText = 'diff'
    stageElement.append(diff)
  }

  stagesElement.append(stageElement)
})

scoreboard.append(stagesElement)
