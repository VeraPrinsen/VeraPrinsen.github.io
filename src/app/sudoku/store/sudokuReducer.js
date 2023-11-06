import {INITIAL_SUDOKU_GRID} from "./SudokuContext";

export const ACTIONS = {
    CELL_CLICK: "CELL_CLICK",
    KEY_PRESS: "KEY_PRESS"
}

export const sudokuReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CELL_CLICK:
            return cellClickAction(state, action)
        case ACTIONS.KEY_PRESS:
            return keyPressAction(state, action)
    }
}

/**
 * Clicking on a cell will make it active
 * If the cell is already active, it will set the active cell to none (null)
 */
const cellClickAction = (state, action) => {
    const row = action.payload.rIndex
    const column = action.payload.cIndex
    let newActiveCell
    if (row === null || column === null) {
        newActiveCell = null
    } else if (INITIAL_SUDOKU_GRID[row][column] !== null) {
        return state
    } else if (!state.activeCell) {
        newActiveCell = [row, column]
    } else if (state.activeCell[0] === row && state.activeCell[1] === column) {
        newActiveCell = null
    } else {
        newActiveCell = [row, column]
    }
    return { ...state, activeCell: newActiveCell }
}

/**
 * Check if a cell is active, then change that cell to the pressed key, if pressed key is a number in [1-9]
 */
const keyPressAction = (state, action) => {
    const key = action.payload.key
    const activeCell = state.activeCell
    if (activeCell && INITIAL_SUDOKU_GRID[activeCell[0]][activeCell[1]] === null) {
        const prevGrid = state.grid
        const newGrid = JSON.parse(JSON.stringify(prevGrid))
        if (key > 0 && key <= 9) {
            newGrid[activeCell[0]][activeCell[1]] = key
            return { ...state, grid: newGrid }
        } else if (key === "Backspace") {
            newGrid[activeCell[0]][activeCell[1]] = null
            return { ...state, grid: newGrid }
        }
    }
    return state
}