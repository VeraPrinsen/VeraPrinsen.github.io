import { useState } from "react";
import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { ARCS_STATE, EMPTY_GAME_STATE, LOCATIONS, MAPS } from "../util/constants";
import { shuffleArray } from "../../util/shuffleArray";

const NewGame = ({ handleGameStateChange }) => {
	const [nPlayers, setNPlayers] = useState(2)
	const [nLars, setNLars] = useState(1)
	const [selectedMap, setSelectedMap] = useState(null)

	const handlePlayerClick = (value) => {
		setNPlayers(value)
		setSelectedMap(null)
	}

	const handleStartGame = () => {
		const gameState = JSON.parse(JSON.stringify(EMPTY_GAME_STATE))
		gameState.dateTimeStarted = new Date().toLocaleString()
		gameState.map = selectedMap
		gameState.nPlayers = nPlayers
		gameState.nLars = nLars

		// Determine which player number the Lars are
		const playersArray = shuffleArray(Array.from({length: nPlayers}, (_, i) => i + 1))

		// Determine the target planet for each Lars
		const mapInfo = MAPS[selectedMap]
		const outOfPlayLocations = mapInfo.outOfPlay

		for (let i = 1; i <= nLars; i++) {
			gameState[`lars${i}`].playerNumber = playersArray[i]
			outOfPlayLocations.push(mapInfo.larsStarport[playersArray[i]])
		}

		console.log(outOfPlayLocations)
		const inPlayLocations = shuffleArray(LOCATIONS.filter(location => !outOfPlayLocations.includes(location)))

		for (let i = 1; i <= nLars; i++) {
			gameState[`lars${i}`].targetPlanet = inPlayLocations[i]
		}

		handleGameStateChange(gameState)
	}

	const maps = Object.keys(MAPS).filter(map => map.startsWith(nPlayers))

	return (
		<div className="new-game-container">
			<h1>New Game</h1>
			<div className="n-selection">
				<span># Players</span>
				<ToggleButton value={2} selected={nPlayers === 2} onClick={() => handlePlayerClick(2)}/>
				<ToggleButton value={3} selected={nPlayers === 3} onClick={() => handlePlayerClick(3)}/>
				<ToggleButton value={4} selected={nPlayers === 4} onClick={() => handlePlayerClick(4)}/>
			</div>

			<div className="n-selection">
				<span># Lars</span>
				<ToggleButton value={1} selected={nLars === 1} onClick={() => setNLars(1)}/>
				<ToggleButton value={2} selected={nLars === 2} onClick={() => setNLars(2)}/>
			</div>

			<div className="map-selection">
				<span>Map {nPlayers} players</span>
				{maps.map((map, index) => (
					<ToggleButton key={index} value={map.slice(1, map.length)} selected={selectedMap === map}
					              onClick={() => setSelectedMap(map)}/>
				))}
			</div>

			{selectedMap && (
				<div className="start-game">
					<ToggleButton value={"Start Game"} onClick={handleStartGame} selected/>
				</div>
			)}

			<div className="start-game">
				<ToggleButton value={"Remove State"} onClick={() => localStorage.removeItem(ARCS_STATE)} selected/>
			</div>
		</div>
	)
}

export default NewGame