import React from 'react'
import '../stylesheets/GamesBox.scss'
import List from '../../objects/components/List'
import { gamesToItems } from "../util/gameConverter";

const GamesList = ({ games, onClickAction, onClickIcon, showImages }) => {

    const handleOnClick = (game) => {
        onClickAction(game)
    }

    return (
        <div className='games-list'>
            <List items={gamesToItems(games, handleOnClick, onClickIcon, showImages)} />
        </div>
    )
}

export default GamesList