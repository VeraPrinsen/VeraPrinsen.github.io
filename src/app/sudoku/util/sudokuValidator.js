import { solve } from "./sudokuSolver.js";

/**
 * Returns a List of errors: [row, column]
 */
export const validate = (initialGrid, solvedGrid) => {
    // Check if solvedGrid has empty cells, then it cannot be validated yet
    if (hasEmptyCells(solvedGrid)) {
        throw "Cannot validate grid with empty cells"
    }

    const solutions = solve(initialGrid)
    if (!solutions || solutions.length === 0) {
        throw "There are no solutions for this Sudoku"
    }

    // Check which solution has the most similarity to the given grid
    const solution = chooseMostSimilarSolution(solutions, solvedGrid)

    // Compare solution with the solvedGrid and add errors for each cell that is wrong
    const errors = []
    solution.forEach((row, rIndex) => {
        row.forEach((cell, cIndex) => {
            if (cell !== solvedGrid[rIndex][cIndex]) {
                errors.push([rIndex, cIndex])
            }
        })
    })
    return errors
}

const hasEmptyCells = grid => {
    return grid.some(row => row.some(cell => cell === null))
}

const chooseMostSimilarSolution = (solutions, solvedGrid) => {
    if (solutions.length !== 1) {
        let bestSolution
        let bestSolutionSimilarities = 0
        solutions.forEach(solution => {
            let similarities = similarCells(solution, solvedGrid)
            if (similarities > bestSolutionSimilarities) {
                bestSolution = solution
                bestSolutionSimilarities = similarities
            }
        })
        return bestSolution
    }
    return solutions[0]
}

const similarCells = (solution, solvedGrid) => {
    let similarities = 0
    solution.forEach((row, rIndex) => {
        row.forEach((cell, cIndex) => {
            if (cell === solvedGrid[rIndex][cIndex]) {
                similarities++
            }
        })
    })
    return similarities
}