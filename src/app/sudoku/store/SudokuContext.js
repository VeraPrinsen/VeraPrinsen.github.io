import { createContext, useReducer } from "react";
import { ACTIONS, sudokuReducer } from "./sudokuReducer";
import {NOTES_OFF} from "../util/constants";

export const INITIAL_SUDOKU_GRID = [
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
    grid: INITIAL_SUDOKU_GRID,
    activeCell: null,
    mode: NOTES_OFF
}
const HANDLERS = {
    onCellClick: () => {},
    onKeyPress: () => {},
    onModeToggle: () => {}
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

    // Creating the Context
    const contextValue = {
        ...state,
        onCellClick: handleCellClick,
        onKeyPress: handleKeyPress,
        onModeToggle: handleModeToggle
    }

    return (
        <SudokuContext.Provider value={contextValue}>
            {children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider