const matrix = (nRows, nCols) => {
    let rowStart = 2
    let rowEnd = nRows
    let colStart = 1
    let colEnd = nCols

    let currentIndex = 1
    let direction = 'E' // N, E, S, W
    let currentRow = 1
    let currentCol = 1

    let totalNumbers = nRows * nCols
    let currentNumbers = 0
    const output = []
    while (currentNumbers < totalNumbers) {
        output.push(currentIndex)

        switch (direction) {
            case 'E':
                currentIndex = currentIndex + 1
                currentCol = currentCol + 1

                if (currentCol >= colEnd) {
                    direction = 'S'
                    colEnd = colEnd - 1
                }
                break
            case 'S':
                currentIndex = currentIndex + nCols
                currentRow = currentRow + 1

                if (currentRow >= rowEnd) {
                    direction = 'W'
                    rowEnd = rowEnd - 1
                }
                break
            case 'W':
                currentIndex = currentIndex - 1
                currentCol = currentCol - 1

                if (currentCol <= colStart) {
                    direction = 'N'
                    colStart = colStart + 1
                }
                break
            case 'N':
                currentIndex = currentIndex - nCols
                currentRow = currentRow - 1

                if (currentRow <= rowStart) {
                    direction = 'E'
                    rowStart = rowStart + 1
                }
                break
        }
        currentNumbers = currentNumbers + 1
    }
    console.log(output.join(' '))
}

export default matrix