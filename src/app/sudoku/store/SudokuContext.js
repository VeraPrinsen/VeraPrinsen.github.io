import { createContext, useReducer } from "react";
import { ACTIONS, sudokuReducer } from "./sudokuReducer";
import {NOTES_OFF} from "../util/constants";

// export const INITIAL_SUDOKU_GRID = [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9],
// ]

// export const INITIAL_SUDOKU_GRID = [
//     [8, 2, 7, 1, 5, 4, 3, 9, 6],
//     [9, 6, 5, 3, 2, 7, 1, 4, 8],
//     [3, 4, 1, 6, 8, 9, 7, 5, 2],
//     [5, 9, 3, 4, 6, 8, 2, 7, 1],
//     [4, 7, 2, 5, 1, 3, 6, 8, 9],
//     [6, 1, 8, 9, 7, 2, 4, 3, 5],
//     [7, 8, 6, 2, 3, 5, 9, 1, 4],
//     [1, 5, 4, 7, 9, 6, 8, 2, 3],
//     [2, 3, 9, 8, 4, 1, 5, 6, 7],
// ]

export const INITIAL_SUDOKU_GRID = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [0, 9, 3, 4, 6, 8, 0, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [0, 3, 9, 8, 4, 1, 0, 6, 7],
]

const findPairs = () => {
    for (let row1 = 0; row1 < 9; row1++) {
        for (let column1 = 0; column1 < 9; column1++) {
            for (let row2 = row1 + 1; row2 < 9; row2++) {
                for (let column2 = column1 + 1; column2 < 9; column2++) {
                    if (INITIAL_SUDOKU_GRID[row1][column1] === INITIAL_SUDOKU_GRID[row2][column2] &&
                        INITIAL_SUDOKU_GRID[row1][column2] === INITIAL_SUDOKU_GRID[row2][column1]) {
                        console.log([row1, column1, row2, column2])
                    }
                }
            }
        }
    }
}

const INITIAL_STATE = {
    grid: INITIAL_SUDOKU_GRID,
    gridErrors: [],
    errors: "",
    messages: "",
    activeCell: null,
    mode: NOTES_OFF
}
const HANDLERS = {
    onCellClick: () => {},
    onKeyPress: () => {},
    onModeToggle: () => {},
    onValidate: () => {}
}
export const SudokuContext = createContext({ ...INITIAL_STATE, ...HANDLERS })

const SudokuContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sudokuReducer, INITIAL_STATE)

    // HANDLERS
    const handleCellClick = (r, c) => {
        dispatch({
            type: ACTIONS.CELL_CLICK,
            payload: {
                rIndex: r,
                cIndex: c
            }
        })
    }

    const handleKeyPress = key => {
        dispatch({
            type: ACTIONS.KEY_PRESS,
            payload: {
                key
            }
        })
    }

    const handleModeToggle = () => {
        dispatch({
            type: ACTIONS.MODE_TOGGLE,
        })
    }

    const handleValidate = () => {
        dispatch({
            type: ACTIONS.VALIDATE,
            payload: {
                grid: state.grid
            }
        })
    }

    // Creating the Context
    const contextValue = {
        ...state,
        onCellClick: handleCellClick,
        onKeyPress: handleKeyPress,
        onModeToggle: handleModeToggle,
        onValidate: handleValidate
    }

    return (
        <SudokuContext.Provider value={contextValue}>
            {children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider