import React from 'react'
import '../stylesheets/GamesBox.scss'
import List from '../../objects/components/List'

const GamesList = ({ games, onClickAction, onClickIcon, showDetails, showImages }) => {

    const handleOnClick = (game) => {
        onClickAction(game)
    }

    const gamesToItems = games => {
        return games.map(game => {
            return {
                id: game.name,
                title: game.name,
                description: showDetails ? game.yearPublished : '',
                thumbnail: showImages ? game.thumbnail : '',
                image: showImages ? game.image : '',
                action: React.createElement(onClickIcon, { className: 'li-action-icon', onClick: () => handleOnClick(game) })
            }
        })
    }

    return (
        <div className='games-list'>
            <List items={gamesToItems(games)} />
        </div>
    )
}

export default GamesList