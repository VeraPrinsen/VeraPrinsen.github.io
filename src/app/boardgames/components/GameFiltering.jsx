import '../stylesheets/GameFiltering.scss'
import { gamesToItems } from "../util/gameConverter";
import List from "../../objects/components/List";
import React, { useState } from "react";
import FilteredGame from "./FilteredGame";

const GameFiltering = ({
    selectedGames,
}) => {
    const [players, setPlayers] = useState("")
    const [time, setTime] = useState("")

    const onChangePlayers = (e) => {
        setPlayers(e.target.value)
    }

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }

    debugger

    const filteredGames = selectedGames.filter((game) => {
        if (players !== "") {
            if (game.minPlayers > parseInt(players) || game.maxPlayers < parseInt(players)) {
                return false
            }
        }

        if (time !== "") {
            if (game.minPlayTime > parseInt(time) || game.maxPlayTime < parseInt(time)) {
                return false
            }
        }

        return true
    })

    debugger

    return (
        <div className="main-box game-info-main">
            <div className="filtering">
                <div className="input">How many players are playing? <input value={players} maxLength={2} onChange={(e) => onChangePlayers(e)}/></div>
                <div className="input">How much time do you have? <input value={time} maxLength={3} onChange={(e) => onChangeTime(e)}/> min</div>
            </div>
            <div className="filtered-game-container">
                {filteredGames.map((game) => <FilteredGame game={game} key={game.id} />)}
            </div>
        </div>
    )
}

export default GameFiltering