import SudokuGrid from "./SudokuGrid";
import {useContext} from "react";
import {INITIAL_SUDOKU_GRID, SudokuContext} from "../store/SudokuContext";

import "../stylesheets/Sudoku.scss"
import {NOTES_OFF, NOTES_ON} from "../util/constants";
import {solve} from "../util/sudokuSolver";

const Sudoku = () => {
    const { mode, errors, messages, onCellClick, onModeToggle, onValidate } = useContext(SudokuContext)

    const handleScreenClick = e => {
        e.stopPropagation()
        onCellClick(null, null)
    }

    const handleButtonClick = e => {
        e.stopPropagation()
        onModeToggle()
    }

    const handleValidateClick = e => {
        e.stopPropagation()
        onValidate()
    }

    let modeText
    if (mode === NOTES_ON) {
        modeText = "on"
    } else if (mode === NOTES_OFF) {
        modeText = "off"
    }

    return (
        <div className="sudoku-main" onClick={handleScreenClick}>
            <SudokuGrid />
            <div className="actions">
                <span><button onClick={handleButtonClick}>Notes</button>{modeText}</span>
                <span><button onClick={handleValidateClick}>Validate</button></span>
            </div>
            <div className="errors">
                {errors}
            </div>
            <div className="messages">
                {messages}
            </div>
        </div>
    )
}

export default Sudoku