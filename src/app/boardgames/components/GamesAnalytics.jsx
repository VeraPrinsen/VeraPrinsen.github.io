import '../stylesheets/GamesAnalytics.scss'
import React, {useEffect, useState} from 'react'
import BarChart from '../../objects/components/BarChart'

const GamesAnalytics = ({
    selectedGames,
}) => {
    const [data, setData] = useState(new Map())

    useEffect(() => {
        if (selectedGames) {
            let earliestYear = 9999
            let latestYear = 0
            selectedGames.forEach(game => {
                if (game.yearPublished < earliestYear) {
                    earliestYear = game.yearPublished
                }
                if (game.yearPublished > latestYear) {
                    latestYear = game.yearPublished
                }
            })

            let newData = new Map()
            let currentYear = earliestYear
            while (currentYear <= latestYear) {
                newData.set(currentYear, 0)
                currentYear = currentYear + 1
            }

            selectedGames.forEach(game => {
                let yearPublished = game.yearPublished
                if (!newData.get(yearPublished)) {
                    newData.set(yearPublished, 1)
                } else {
                    newData.set(yearPublished, data.get(yearPublished) + 1)
                }
            })
            setData(newData)
        }
    }, [selectedGames, data])

    return (
            <div className="main-box game-info-main">
                <BarChart data={data} />
            </div>
        )
}

export default GamesAnalytics