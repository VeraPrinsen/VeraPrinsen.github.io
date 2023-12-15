/* eslint-disable */

import React, { useState } from 'react'
import './stylesheets/Boardgames.scss'
import GamesSearch from './components/GamesSearch'
import SelectedGames from './components/SelectedGames'
import Hub from '../navigation/components/Hub'
import Header from './components/Header'
import {SELECTED_GAMES} from './util/constants'
import SubMenu from "./components/navigation/SubMenu";

const TABS = [
    {
        title: 'Select Games',
        id: 'select-games'
    },
    {
        title: 'Filter Games',
        id: 'filter-games'
    },
    {
        title: 'Game Analytics',
        id: 'game-analytics'
    },
]

const Boardgames = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].id)
    const [selectedGames, setSelectedGames] = useState(localStorage.getItem(SELECTED_GAMES) ? JSON.parse(localStorage.getItem(SELECTED_GAMES)) : [])
    const [showDetails, setShowDetails] = useState(false)
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

    const onChangeShowDetails = () => {
        setShowDetails(currentShowDetails => !currentShowDetails)
    }

    const onChangeShowImages = () => {
        setShowImages(currentShowImages => !currentShowImages)
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case TABS[0].id:
                return [renderGamesSearch(), renderSelectedGames()]
            case TABS[1].id:
                return [renderSelectedGames()]
            case TABS[2].id:
                return [renderAnalytics()]
            default:
                return <div>404</div>
        }
    }

    const renderGamesSearch = () => {
        return (
            <GamesSearch
                selectedGames={selectedGames}
                addGame={addGame}
                showDetails={showDetails}
                showImages={showImages}
            />
        )
    }

    const renderSelectedGames = () => {
        return (
            <SelectedGames
                selectedGames={selectedGames}
                removeGame={removeGame}
                showDetails={showDetails}
                showImages={showImages}
            />
        )
    }

    const renderAnalytics = () => {
        return <div>ANALYTICS</div>
    }

    return (
        <>
            <Hub title="Boardgames" />
            <div className="boardgames-main-app">
                <Header
                    showDetails={showDetails}
                    onChangeShowDetails={onChangeShowDetails}
                    showImages={showImages}
                    onChangeShowImages={onChangeShowImages}
                />
                <SubMenu
                    tabs={TABS}
                    activeTab={activeTab}
                    onChangeTab={setActiveTab}
                />
                <div className="content">
                    {renderTabContent()}
                </div>
            </div>
        </>
    )
}

export default Boardgames
