/**
 * Returns a list of all solutions for the given sudoku grid
 * List is capped at x results (x = 100 for example)
 */
export const solve = initialGrid => {
    const grid = JSON.parse(JSON.stringify(initialGrid))
    let row = 0
    let column = 0
    let solutions = []
    while (row >= 0 && row < 9 && column >= 0 && column < 9) {
        // Only edit cells if they are 0 in the initialGrid
        if (initialGrid[row][column] === 0) {
            grid[row][column]++

            // If a cell was changed to 10, change it back to zero and go back to the previous cell
            // Of we are at the first cell of the row, change the column back to 8 and go back to the previous row
            if (grid[row][column] > 9) {
                grid[row][column] = 0
                column--
                if (column < 0) {
                    column = 8
                    row--
                }
                while (initialGrid[row][column] !== 0) {
                    column--
                    if (column < 0) {
                        column = 8
                        row--
                    }
                }

            } else

            // Check if the new change is still valid, if so, go to the next cell
            if (isValidGrid(grid)) {
                column++
                // If this is the last cell of the row, set column to zero and go to the next row
                if (column >= 9) {
                    column = 0
                    row++
                }
            }

        // If this is a cell from the initialGrid, go to the next cell
        } else {
            column++
            if (column >= 9) {
                column = 0
                row++
            }
        }
    }
    solutions.push(grid)
    return solutions
}

const isValidGrid = grid => {
    // Check rows
    for (let row = 0; row < 9; row++) {
        let rowNumbers = []
        for (let column = 0; column < 9; column++) {
            if (grid[row][column] !== 0) {
                rowNumbers.push(grid[row][column])
            }
        }
        if (rowNumbers.filter((item, index) => rowNumbers.indexOf(item) !== index).length > 0) {
            return false
        }
    }

    // Check columns
    for (let column = 0; column < 9; column++) {
        let columnNumbers = []
        for (let row = 0; row < 9; row++) {
            if (grid[row][column] !== 0) {
                columnNumbers.push(grid[row][column])
            }
        }
        if (columnNumbers.filter((item, index) => columnNumbers.indexOf(item) !== index).length > 0) {
            return false
        }
    }

    // Check sections
    for (let section = 0; section < 9; section++) {
        let sectionNumbers = []
        for (let cell = 0; cell < 9; cell++) {
            let row = (3 * Math.floor(section/3)) + Math.floor(cell / 3)
            let column = (3 * (section % 3)) + (cell % 3)
            if (grid[row][column] !== 0) {
                sectionNumbers.push(grid[row][column])
            }
        }
        if (sectionNumbers.filter((item, index) => sectionNumbers.indexOf(item) !== index).length > 0) {
            return false
        }
    }

    return true;
}