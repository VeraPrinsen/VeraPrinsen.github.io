import React, { useState } from 'react'
import './stylesheets/Boardgames.scss'
import GamesSearch from './components/GamesSearch'
import SelectedGames from './components/SelectedGames'
import GamesAnalytics from "./components/GamesAnalytics";
import Hub from "../navigation/components/Hub";
import Header from "./components/Header";
import {SELECTED_GAMES} from "./util/constants";

const Boardgames = () => {
    const [selectedGames, setSelectedGames] = useState(localStorage.getItem(SELECTED_GAMES) ? JSON.parse(localStorage.getItem(SELECTED_GAMES)) : [])
    const [showImages, setShowImages] = useState(false)

    const addGame = gameToAdd => {
        setSelectedGames(currentSelectedGames => {
            const newSelectedGames = [...currentSelectedGames, gameToAdd]
            localStorage.setItem(SELECTED_GAMES, JSON.stringify(newSelectedGames))
            return newSelectedGames
        })
    }

    const removeGame = gameToRemove => {
        setSelectedGames(currentSelectedGames => {
            const newSelectedGames = currentSelectedGames.filter(game => game.id !== gameToRemove.id)
            localStorage.setItem(SELECTED_GAMES, JSON.stringify(newSelectedGames))
            return newSelectedGames
        })
    }

    const onChangeShowImages = () => {
        setShowImages(currentShowImages => !currentShowImages)
    }

    return (
        <>
            <Hub title="Boardgames" />
            <div className="boardgames-main-app">
                <Header showImages={showImages} onChangeShowImages={onChangeShowImages} />
                <div className="content">
                    <GamesSearch
                        selectedGames={selectedGames}
                        addGame={addGame}
                        showImages={showImages}
                    />
                    <SelectedGames
                        selectedGames={selectedGames}
                        removeGame={removeGame}
                        showImages={showImages}
                    />
                    <GamesAnalytics selectedGames={selectedGames} />
                </div>
            </div>
        </>
    )
}

export default Boardgames
