import React, { useState } from 'react'
import './stylesheets/Boardgames.scss'
import GamesSearch from './components/GamesSearch'
import SelectedGames from './components/SelectedGames'
import GamesAnalytics from "./components/GamesAnalytics";

const Boardgames = () => {
    const [selectedGames, setSelectedGames] = useState([])
    const [showImages, setShowImages] = useState(false)

    const addGame = gameToAdd => {
        setSelectedGames(oldArray => [...oldArray, gameToAdd]);
    }

    const removeGame = gameToRemove => {
        setSelectedGames(selectedGames.filter(game => game.id !== gameToRemove.id));
    }

    const onChangeShowImages = () => {
        setShowImages(prevState => !prevState)
    }

    return (
        <div className="boardgames-main-app">
            <div className="header">
                <div className="title">BOARDGAMES</div>
                <div className="options">
                    <input type="checkbox" checked={showImages} name="show-images" onChange={onChangeShowImages} />
                    <label htmlFor="show-images">Show Images</label>
                </div>
            </div>
            <div className="content">
                <GamesSearch
                    selectedGames={selectedGames}
                    addGame={addGame}
                    showImages={showImages}
                />
                <SelectedGames
                    selectedGames={selectedGames}
                    setSelectedGames={setSelectedGames}
                    removeGame={removeGame}
                    showImages={showImages}
                />
                <GamesAnalytics selectedGames={selectedGames} />
            </div>
        </div>
    )
}

export default Boardgames
