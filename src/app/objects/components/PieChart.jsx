import React from 'react'
import '../stylesheets/PieChart.scss'

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// data is a map with labels as keys and numbers as amounts
const PieChart = ({ data }) => {
    if (data === null || Array.from(data.keys()).length === 0) {
        return (<div>No data</div>)
    }

    let pieChartTotalValue = 0
    Array.from(data.keys()).forEach(dataPointLabel => {
        pieChartTotalValue = pieChartTotalValue + data.get(dataPointLabel)
    })

    // example: conic-gradient(
    //      red 6deg, orange 6deg 18deg, yellow 18deg 45deg,
    //      green 45deg 110deg, blue 110deg 200deg, purple 200deg);
    let currentPercentage = 0
    let formattedData = Array.from(data.keys()).map(dataPointLabel => {
        let percentage = Math.ceil(data.get(dataPointLabel) / pieChartTotalValue * 360)
        let returnObject = {
            label: dataPointLabel,
            fromPercentage: currentPercentage,
            toPercentage: currentPercentage + percentage,
            color: getRandomColor()
        }
        currentPercentage = currentPercentage + percentage
        return returnObject
    })

    let pieChartPieces = formattedData.map(dataPoint => {
        return dataPoint.color + ' ' + dataPoint.fromPercentage + 'deg ' + dataPoint.toPercentage + 'deg'
    })
    let pieChartStyling = 'conic-gradient(' + pieChartPieces.join(', ') + ')'

    return (
        <div>
            <div className="pie" style={{ backgroundImage: pieChartStyling }} />
            <div>
                Legend
                {formattedData.map(dataPoint => {
                    return (
                        <div className="legend">
                            <div className="legend-box" style={{ backgroundColor: dataPoint.color }} />
                            <div className="legend-label">{dataPoint.label}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PieChart