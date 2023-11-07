import SudokuGrid from "./SudokuGrid";
import {useContext} from "react";
import { SudokuContext } from "../store/SudokuContext";

import "../stylesheets/Sudoku.scss"
import {NOTES_OFF, NOTES_ON} from "../util/constants";

const Sudoku = () => {
    const { mode, gridErrors, errors, onCellClick, onModeToggle, onValidate } = useContext(SudokuContext)

    const handleScreenClick = e => {
        e.stopPropagation()
        onCellClick(null, null)
    }

    const handleButtonClick = () => {
        onModeToggle()
    }

    const handleValidateClick = () => {
        onValidate()
    }

    let modeText
    if (mode === NOTES_ON) {
        modeText = "on"
    } else if (mode === NOTES_OFF) {
        modeText = "off"
    }

    console.log(gridErrors)

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
        </div>
    )
}

export default Sudoku