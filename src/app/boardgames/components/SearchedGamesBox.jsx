import React, { useState, useCallback } from 'react'
import "../stylesheets/GamesBox.scss"
import {search} from "../api/search-game-api";
import { Space } from 'antd'
import { DoubleRightOutlined } from "@ant-design/icons";
import GamesList from "./GamesList";
import Button from "../../objects/components/Button";
import TextInput from "../../objects/components/TextInput";

const SearchedGamesBox = ({
    selectedGames,
    addGame
}) => {
    const [requestedGames, setRequestedGames] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getRequest = useCallback( () => {
        search(searchTerm)
            .then(response => setRequestedGames(response))
    }, [searchTerm])

    const handleInputOnChange = e => {
        setSearchTerm(e.target.value)
    }

    let selectedGamesIds;
    if (selectedGames && !selectedGames.isEmpty) {
        selectedGamesIds = selectedGames.map(game => game.id)
    }

    let requestedGamesToShow;
    if (requestedGames.length > 0) {
        requestedGamesToShow = requestedGames.filter(game => !selectedGamesIds.includes(game.id))
    } else {
        requestedGamesToShow = []
    }

    return (
        <div className='main-box games-list-box'>
            <div className='buttons'>
                <TextInput onChange={handleInputOnChange} value={searchTerm} />
                <Button text="Search" onClick={getRequest} />
            </div>
            <GamesList
                games={requestedGamesToShow}
                onClickAction={addGame}
                onClickIcon={DoubleRightOutlined}
            />
        </div>
    )
}

export default SearchedGamesBox