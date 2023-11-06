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
                            let backgroundColor = ""
                            if (activeCell && activeCell[0] === rIndex && activeCell[1] === cIndex) {
                                backgroundColor = "active-cell"
                            }
                            return (
                                <div key={rIndex + "," + cIndex}
                                     className={`sudoku-grid-cell ${backgroundColor}`}
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