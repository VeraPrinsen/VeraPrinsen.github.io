export const amountOfAliveNeighbours = (grid, row, column) => {
    if (row === 2 && column === 2) {
        debugger
    }
    let neighbours = 0
    // take into account borders
    for (let i = row-1; i <= row+1; i++) {
        if (i < 0 || i > grid[0].length-1) continue
        for (let j = column-1; j <= column+1; j++) {
            if (j < 0 || j > grid.length-1) continue
            if (!(i === row && j === column)) {
                if (grid[j][i]) {
                    neighbours = neighbours + 1
                }
            }
        }
    }
    return neighbours
}