import React from 'react'
import { Statistic } from 'antd'

const GameInfoBox = ({
    selectedGames,
    exchangeRate
}) => {
    let totalCostUSD = 0
    if (selectedGames && !selectedGames.isEmpty) {
        selectedGames.forEach((game) => {
            if (typeof game.msrp === 'number') {
                totalCostUSD += game.msrp
            }
        })
    }

    totalCostUSD = (Math.round(totalCostUSD * 100) / 100).toFixed(2)
    const totalCostEur = (Math.round((totalCostUSD / exchangeRate) * 100) / 100).toFixed(2)
    
    return (
        <div className='game-info-main main-box'>
            <Statistic
                title="Total value of all games (based on the current manufacturers suggested retail price)"
                value={totalCostEur}
                precision={2}
                decimalSeparator=","
                groupSeparator="."
                prefix="€"
                className='statistic'
            />
        </div>
    )
}

export default GameInfoBox