import React, { useState } from 'react'
import './stylesheets/Boardgames.scss'
import SearchedGamesBox from './components/SearchedGamesBox'
import SelectedGamesBox from './components/SelectedGamesBox'

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
            <SearchedGamesBox
                selectedGames={selectedGames}
                addGame={addGame}
            />
            <SelectedGamesBox
                selectedGames={selectedGames}
                setSelectedGames={setSelectedGames}
                removeGame={removeGame}
            />
        </div>
    )
}

export default Boardgames
