import React, { useState } from 'react'
import './stylesheets/Boardgames.scss'
import GamesSearch from './components/GamesSearch'
import SelectedGames from './components/SelectedGames'
import GamesAnalytics from "./components/GamesAnalytics";

const Boardgames = () => {
    const [selectedGames, setSelectedGames] = useState([])

    const addGame = gameToAdd => {
        setSelectedGames(oldArray => [...oldArray, gameToAdd]);
    }

    const removeGame = gameToRemove => {
        setSelectedGames(selectedGames.filter(game => game.id !== gameToRemove.id));
    }

    return (
        <div className="boardgames-main-app">
            <GamesSearch
                selectedGames={selectedGames}
                addGame={addGame}
            />
            <SelectedGames
                selectedGames={selectedGames}
                setSelectedGames={setSelectedGames}
                removeGame={removeGame}
            />
            <GamesAnalytics selectedGames={selectedGames} />
        </div>
    )
}

export default Boardgames
