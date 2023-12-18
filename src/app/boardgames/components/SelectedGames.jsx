import '../stylesheets/GamesBox.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import GamesList from './GamesList'
import React from "react";

const SelectedGames = ({
    selectedGames,
    removeGame,
    showDetails,
    showImages
}) => {
    if (removeGame) {
        return (
            <div className='main-box games-list-box'>
                <div className='games-header'>
                    <h2>My Collection</h2>
                </div>
                <GamesList
                    games={selectedGames}
                    onClickAction={removeGame}
                    onClickIcon={AiOutlineDelete}
                    showDetails={showDetails}
                    showImages={showImages}
                />
            </div>
        )
    }

    return (
        <div className='main-box games-list-box'>
            <div className='games-header'>
                <h2>My Collection</h2>
            </div>
            <GamesList
                games={selectedGames}
                showDetails={showDetails}
                showImages={showImages}
            />
        </div>
    )
}

export default SelectedGames