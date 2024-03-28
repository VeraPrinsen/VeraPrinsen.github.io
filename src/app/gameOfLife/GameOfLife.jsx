import './GameOfLife.scss'
import {useEffect, useState} from 'react'
import Cell from './Cell'
import {amountOfAliveNeighbours} from './util'
import Hub from '../navigation/components/Hub'

const GameOfLife = () => {
    const [rows, setRows] = useState(10)
    const [columns, setColumns] = useState(10)
    const [grid, setGrid] = useState([])
    const [playOn, setPlayOn] = useState(false)

    // Reset grid when #columns or #rows change
    useEffect(() => {
        const grid = []
        for (let j = 0; j < columns; j++) {
            const column = []
            for (let i = 0; i < rows; i++) {
                column.push(false)
            }
            grid.push(column)
        }
        setGrid(grid)
    }, [columns, rows])

    // Change the state of a cell when you click on it
    const onCellClick = (iColumn, iRow) => {
        setGrid(prevState => {
                return prevState.map((column, cIndex) => {
                    return column.map((row, rIndex) => {
                        if (cIndex === iColumn && rIndex === iRow) {
                            return !row
                        }
                        return row
                    })
                })
            }
        )
    }

    // grid[x][y], x = column, y = row
    const drawGrid = () => {
        if (grid && grid.length > 0 &&
            rows >= 5 && rows <= 30 &&
            columns >= 5 && columns <= 30) {
            const height = 30/rows
            const width = 30/columns

            return grid.map((column, cIndex) => {
                const columnToDraw = column.map((row, rIndex) => {
                    return (
                        <Cell
                            key={cIndex + ',' + rIndex}
                            className="gol-grid-cell"
                            height={height + 'rem'}
                            width={width + 'rem'}
                            alive={grid[cIndex][rIndex]}
                            onClick={() => onCellClick(cIndex,rIndex)}
                        />
                    )
                })
                return <div key={cIndex} className="gol-grid-column">{columnToDraw}</div>
            })
        }
    }

    // Take one step in the Game of Life
    // neighbours -> orthogonally or diagonally adjacent cells
    // - Every live cell with 0, 1 or more than 3 alive neighbours dies
    // - Every live cell with 2 or 3 alive neighbours keeps living
    // - dead cells with exactly 3 alive neighbours becomes alive
    const onStep = () => {
        setGrid(prevState => {
            let newGrid = prevState.map((column, cIndex) => {
                return column.map((row, rIndex) => {
                    const isAlive = row
                    const neighbours = amountOfAliveNeighbours(prevState, rIndex, cIndex)
                    if (isAlive) {
                        if (neighbours === 2 || neighbours === 3) {
                            return true
                        }
                        return false
                    } else {
                        if (neighbours === 3) {
                            return true
                        }
                        return false
                    }
                })
            })
            return newGrid
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (playOn) {
                onStep()
            }
        }, 500)

        return () => clearInterval(interval)
    }, [playOn])

    const onPlay = () => {
        setPlayOn(prevState => !prevState)
    }

    const onClear = () => {
        setGrid(prevState => {
                // eslint-disable-next-line
                return prevState.map((column, cIndex) => {
                    // eslint-disable-next-line
                    return column.map((row, rIndex) => {
                        return false
                    })
                })
            }
        )
    }

    return (
        <>
            <Hub title="Game of Life" />
            <div className="game-of-life">
                <div className="gol-grid">
                    {drawGrid()}
                </div>
                <div className="gol-buttons">
                    <div className="gol-button">
                        <div className="label">Rows</div>
                        <input type="number" value={rows} min={5} max={30} onChange={e => setRows(+e.target.value)} />
                    </div>
                    <div className="gol-button">
                        <div className="label">Columns</div>
                        <input type="number" value={columns} min={5} max={30} onChange={e => setColumns(+e.target.value)} />
                    </div>
                    <div className="gol-button">
                        <button onClick={onStep}>{'Step >'}</button>
                    </div>
                    <div className="gol-button">
                        <button onClick={onPlay}>{playOn ? 'Stop' : 'Play'}</button>
                    </div>
                    <div className="gol-button">
                        <button onClick={onClear}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameOfLife