import SudokuGrid from "./SudokuGrid";
import {useContext} from "react";
import { SudokuContext } from "../store/SudokuContext";

import "../stylesheets/Sudoku.scss"
import {NOTES_OFF, NOTES_ON} from "../util/constants";

const Sudoku = () => {
    const { mode, onCellClick, onModeToggle } = useContext(SudokuContext)

    const handleScreenClick = e => {
        e.stopPropagation()
        onCellClick(null, null)
    }

    const handleButtonClick = () => {
        onModeToggle()
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
                <button onClick={handleButtonClick}>Notes</button>
                {modeText}
            </div>
        </div>
    )
}

export default Sudoku