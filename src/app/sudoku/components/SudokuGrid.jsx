import '../stylesheets/SudokuGrid.scss'
import { useContext } from "react";
import { SudokuContext } from "../store/SudokuContext";

const SudokuGrid = () => {
    const { grid, activeCell, onCellClick, onKeyPress } = useContext(SudokuContext)

    const handleCellClick = (e, rIndex, cIndex) => {
        e.stopPropagation()
        onCellClick(rIndex, cIndex)
    }

    document.body.addEventListener('keypress', event => {
        let key = event.key
        onKeyPress(key)
    })

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