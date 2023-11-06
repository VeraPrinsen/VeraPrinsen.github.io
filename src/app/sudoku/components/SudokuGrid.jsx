import '../stylesheets/SudokuGrid.scss'
import { useContext, useEffect, useCallback } from "react";
import {INITIAL_SUDOKU_GRID, SudokuContext} from "../store/SudokuContext";

const SudokuGrid = () => {
    const { grid, activeCell, onCellClick, onKeyPress } = useContext(SudokuContext)

    const handleCellClick = (e, rIndex, cIndex) => {
        e.stopPropagation()
        onCellClick(rIndex, cIndex)
    }

    const keyPress = useCallback(event => {
        let key = event.key
        console.log("RUN KEYPRESS FOR: " + key)
        onKeyPress(key)
    }, [onKeyPress])
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener("keydown", keyPress)
    }, [keyPress])

    return (
        <div className="sudoku-grid">
            {grid.map((row, rIndex) => {
                return (
                    <div key={rIndex} className="sudoku-grid-row">
                        {row.map((column, cIndex) => {
                            let classes = "sudoku-grid-cell"
                            if (activeCell && activeCell[0] === rIndex && activeCell[1] === cIndex) {
                                classes += " active-cell"
                            }
                            if (rIndex % 3 === 2) {
                                classes += " cell-right-border-bold"
                            }
                            if (cIndex % 3 === 2) {
                                classes += " cell-bottom-border-bold"
                            }
                            if (INITIAL_SUDOKU_GRID[rIndex][cIndex] !== null) {
                                classes += " cell-initial-number"
                            }
                            return (
                                <div key={rIndex + "," + cIndex}
                                     className={classes}
                                     onClick={(e) => handleCellClick(e, rIndex, cIndex)}
                                >
                                    {column}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default SudokuGrid