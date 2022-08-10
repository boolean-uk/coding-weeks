const state = {
    gameElement: document.querySelector('.game'),
    // cells: [null, null, null, null, null, null, null, null, null]
    cells: Array(9).fill(null),
    symbols: ['o', 'x']
}

function drawBoard() {
    state.gameElement.innerHTML = ''
    console.log("drawBoard has been run!")

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (state.cells[i]) { // does the cell have an x or an o? if so, this code runs
            const cellSymbol = document.createElement('p') // <p class="symbol"></p>
            cellSymbol.innerText = state.cells[i]
            cellSymbol.classList.add('symbol')

            cell.append(cellSymbol)
        } else { // otherwise it must be empty, so run this next section
            cell.addEventListener('click', function () {
                state.symbols.reverse()
                state.cells[i] = state.symbols[0]
    
                console.log(state.cells)
                drawBoard()
            })
        }

        state.gameElement.append(cell)
    }
}

drawBoard()
