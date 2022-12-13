const stagesArea = document.querySelector('.stages-area')

const stagesElement = document.createElement('ul')
stagesElement.classList.add('stages-list')

const stages = [
  '0-start',
  '1-complete-tree',
  '2-panel-layout',
  '3-add-counter-behaviour',
]

stages.forEach((stage, index) => {
  const stageElement = document.createElement('li')
  stageElement.classList.add('stage')

  const stageName = document.createElement('span')
  stageName.innerText = `${stage}`

  const linkHTML = document.createElement('a')
  linkHTML.setAttribute('href', `https://github.com/boolean-uk/xmas-counter-demo/blob/${stage}/index.html`)
  linkHTML.setAttribute('target', '_blank')
  linkHTML.innerText = 'html'

  const linkCSS = document.createElement('a')
  linkCSS.setAttribute('href', `https://github.com/boolean-uk/xmas-counter-demo/blob/${stage}/main.css`)
  linkCSS.setAttribute('target', '_blank')
  linkCSS.innerText = 'css'

  const linkJS = document.createElement('a')
  linkJS.setAttribute('href', `https://github.com/boolean-uk/xmas-counter-demo/blob/${stage}/index.js`)
  linkJS.setAttribute('target', '_blank')
  linkJS.innerText = 'js'

  stageElement.append(stageName, linkHTML, linkCSS, linkJS)

  if (index > 0) {
    const diff = document.createElement('a')
    diff.setAttribute('href', `https://github.com/boolean-uk/xmas-counter-demo/pull/${index}/files`)
    diff.setAttribute('target', '_blank')
    diff.innerText = 'diff'
    stageElement.append(diff)
  }

  stagesElement.append(stageElement)
})

stagesArea.append(stagesElement)
