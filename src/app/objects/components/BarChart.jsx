import '../stylesheets/BarChart.scss'
import React from 'react'

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// data is a map with labels as keys and numbers as amounts
const BarChart = ({ data }) => {
    if (data === null || Array.from(data.keys()).length === 0) {
        return (<div>No data</div>)
    }

    let barChartMaxValue = 0
    Array.from(data.keys()).forEach(dataPointLabel => {
        if (data.get(dataPointLabel) > barChartMaxValue) {
            barChartMaxValue = data.get(dataPointLabel)
        }
    })
    let remPerPoint = 100 / barChartMaxValue

    return (
        <div className="barchart">
            {Array.from(data.keys()).map(dataPointLabel => {
                return (
                    <div className="barchart-datapoint" key={dataPointLabel}>
                        <div
                            className="barchart-bar"
                            style={{
                                height: remPerPoint*data.get(dataPointLabel),
                                backgroundColor: getRandomColor()
                            }}
                        />
                        <div className="barchart-label">
                            {dataPointLabel}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BarChart