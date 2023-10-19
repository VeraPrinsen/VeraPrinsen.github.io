const Cell = ({ height, width, alive, onClick }) => {
    let color = "white"
    if (alive) {
        color = "red"
    }

    return (
        <div
            className="gol-grid-cell"
            style={{
                height: height,
                width: width,
                backgroundColor: color
            }}
            onClick={onClick}
        />
    )
}

export default Cell