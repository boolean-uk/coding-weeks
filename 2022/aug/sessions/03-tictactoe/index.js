const state = {
    gameElement: document.querySelector('.game'),
    // cells: [null, null, null, null, null, null, null, null, null]
    cells: Array(9).fill(null),
}

function drawBoard() {
    state.gameElement.innerHTML = ''

    for (let i = 0; i < state.cells.length; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        cell.addEventListener('click', function () {
            console.log(`Cell ${i} clicked!`)
        })

        state.gameElement.append(cell)
    }
}

drawBoard()
