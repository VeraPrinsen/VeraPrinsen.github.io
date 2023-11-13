import '../stylesheets/SudokuGrid.scss'
import { useContext, useEffect, useCallback } from "react";
import {INITIAL_SUDOKU_GRID, SudokuContext} from "../store/SudokuContext";

const SudokuGrid = () => {
    const { grid, gridErrors, activeCell, onCellClick, onKeyPress } = useContext(SudokuContext)

    const handleCellClick = (e, rIndex, cIndex) => {
        e.stopPropagation()
        onCellClick(rIndex, cIndex)
    }

    const keyPress = useCallback(event => {
        let key = event.key
        onKeyPress(key)
    }, [onKeyPress])
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener("keydown", keyPress)
    }, [keyPress])

    const renderNotesCell = cell => {
        const cellGrid = []
        for (let row = 0; row < 3; row++) {
            const rowDiv = []
            for (let column = 0; column < 3; column++) {
                const number = row*3 + column + 1
                if (cell.includes(number)) {
                    rowDiv.push(<div className="cell-notes-cell">{number}</div>)
                } else {
                    rowDiv.push(<div className="cell-notes-cell"></div>)
                }
            }
            cellGrid.push(<div className="cell-notes-row">{rowDiv}</div>)
        }
        return <div className="cell-notes-grid">{cellGrid}</div>
    }

    return (
        <div className="sudoku-grid">
            {grid.map((row, rIndex) => {
                return (
                    <div key={rIndex} className="sudoku-grid-row">
                        {row.map((cell, cIndex) => {
                            let classes = "sudoku-grid-cell"
                            if (activeCell && activeCell[0] === rIndex && activeCell[1] === cIndex) {
                                classes += " active-cell"
                            }
                            if (rIndex !== 8 && rIndex % 3 === 2) {
                                classes += " cell-bottom-border-bold"
                            }
                            if (cIndex !== 8 && cIndex % 3 === 2) {
                                classes += " cell-right-border-bold"
                            }
                            if (INITIAL_SUDOKU_GRID[rIndex][cIndex] !== 0) {
                                classes += " cell-initial-number"
                            }
                            if (gridErrors.filter(error => error[0] === rIndex && error[1] === cIndex).length > 0) {
                                classes += " error"
                            }

                            if (Array.isArray(cell)) {
                                return (
                                    <div key={rIndex + "," + cIndex}
                                         className={classes}
                                         onClick={(e) => handleCellClick(e, rIndex, cIndex)}
                                    >
                                        {renderNotesCell(cell)}
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={rIndex + "," + cIndex}
                                         className={classes}
                                         onClick={(e) => handleCellClick(e, rIndex, cIndex)}
                                    >
                                        {cell === 0 ? "" : cell}
                                    </div>
                                )
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default SudokuGrid