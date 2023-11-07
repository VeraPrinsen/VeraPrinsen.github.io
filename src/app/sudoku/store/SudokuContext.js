import { createContext, useReducer } from "react";
import { ACTIONS, sudokuReducer } from "./sudokuReducer";
import {NOTES_OFF} from "../util/constants";

export const INITIAL_SUDOKU_GRID = [
    [null, null, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7],
]

const INITIAL_STATE = {
    grid: INITIAL_SUDOKU_GRID,
    gridErrors: [],
    errors: "",
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