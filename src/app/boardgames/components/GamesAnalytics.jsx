import "../stylesheets/GamesAnalytics.scss"
import React, {useEffect, useState} from "react";
import PieChart from "../../objects/components/PieChart";

const GamesAnalytics = ({
    selectedGames,
}) => {
    const [data, setData] = useState(new Map())

    useEffect(() => {
        if (selectedGames) {
            let newData = new Map()
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
    }, [selectedGames])

    return (
            <div className="main-box game-info-main">
                <PieChart data={data} />
            </div>
        )
}

export default GamesAnalytics