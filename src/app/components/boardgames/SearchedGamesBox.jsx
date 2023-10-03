import React, { useState, useCallback } from 'react'
import {search} from "../../api/boardgames/search-game-api";
import { Button, Input, Space } from 'antd'
import {DoubleRightOutlined} from "@ant-design/icons";
import GamesList from "./GamesList";
import {getNode} from "../../util/xmlUtil";

const SearchedGamesBox = ({
    selectedGames,
    exchangeRate,
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
                <Space align='center'>
                    <Input onChange={handleInputOnChange} value={searchTerm} />
                    <Button type='primary' onClick={getRequest}>Search</Button>
                </Space>
            </div>
            <GamesList
                games={requestedGamesToShow}
                clickAction={addGame}
                clickIcon={DoubleRightOutlined}
                exchangeRate={exchangeRate
                }/>
        </div>
    )
}

export default SearchedGamesBox