import React, { useState, useEffect } from 'react'
import SearchedGamesBox from '../components/SearchedGamesBox'
import '../stylesheets/app.scss'
import SelectedGamesBox from '../components/SelectedGamesBox'
import GameInfoBox from '../components/GameInfoBox'
import {exchangeRate} from "../api/price-api";

const Boardgames = () => {
    const [selectedGames, setSelectedGames] = useState([])
    const [exchangeRateEur, setExchangeRateEur] = useState(1)

    useEffect(() => {
        exchangeRate()
            .then(rate => setExchangeRateEur(rate))
    })

    const addGame = (gameToAdd) => {
        setSelectedGames(oldArray => [...oldArray, gameToAdd]);
    }

    const removeGame = (gameToRemove) => {
        setSelectedGames(selectedGames.filter(game => game.id !== gameToRemove.id));
    }

    return (
        <div className="main-app">
            <SearchedGamesBox
                selectedGames={selectedGames}
                addGame={addGame}
                exchangeRate={exchangeRateEur}
            />
            <SelectedGamesBox
                selectedGames={selectedGames}
                setSelectedGames={setSelectedGames}
                removeGame={removeGame}
                exchangeRate={exchangeRateEur}
            />
            <GameInfoBox
                selectedGames={selectedGames}
                exchangeRate={exchangeRateEur}
            />
        </div>
    )
}

export default Boardgames
