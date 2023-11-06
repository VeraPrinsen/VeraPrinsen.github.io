import SudokuGrid from "./SudokuGrid";
import {useContext} from "react";
import { SudokuContext } from "../store/SudokuContext";

import "../stylesheets/Sudoku.scss"

const Sudoku = () => {
    const { onCellClick } = useContext(SudokuContext)

    const handleClick = e => {
        e.stopPropagation()
        onCellClick(null, null)
    }

    return (
        <div className="sudoku-main" onClick={handleClick}>
            <SudokuGrid />
        </div>
    )
}

export default Sudoku