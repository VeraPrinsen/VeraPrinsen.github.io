/**
 * Returns a Map of errors: [row, column] -> Error message
 */
export const validate = (initialGrid, solvedGrid) => {
    // Check if solvedGrid has empty cells, then it cannot be validated yet
    if (hasEmptyCells(solvedGrid)) {
        throw "Cannot validate grid with empty cells"
    }

    const solutions = solve(initialGrid)
    if (solutions.length !== 1) {
        // If there are multiple solutions,
    }
}

/**
 * Returns a list of all solutions for the given sudoku grid
 * List is capped at x results (x = 100 for example)
 */
const solve = grid => {
    return []
}

const hasEmptyCells = grid => {
    return grid.some(row => row.some(cell => cell === null))
}