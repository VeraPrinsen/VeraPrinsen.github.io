import { createContext, useReducer } from "react";
import { ACTIONS, sudokuReducer } from "./sudokuReducer";

const INITIAL_SUDOKU_GRID = [
    [1, 2],
    [2, 1]
]

const INITIAL_STATE = {
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