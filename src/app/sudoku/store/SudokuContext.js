import { createContext, useReducer } from "react";
import { ACTIONS, sudokuReducer } from "./sudokuReducer";

const INITIAL_SUDOKU_GRID = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
]

const INITIAL_STATE = {
    initialGrid: INITIAL_SUDOKU_GRID,
    grid: INITIAL_SUDOKU_GRID,
    activeCell: null
}
const HANDLERS = {
    onCellClick: () => {},
    onKeyPress: () => {},
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

    // Creating the Context
    const contextValue = {
        initialGrid: INITIAL_SUDOKU_GRID,
        grid: state.grid,
        activeCell: state.activeCell,
        onCellClick: handleCellClick,
        onKeyPress: handleKeyPress
    }

    return (
        <SudokuContext.Provider value={contextValue}>
            {children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider