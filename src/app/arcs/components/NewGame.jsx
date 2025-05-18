import { useState } from "react";
import CustomButton from "../../objects/components/CustomButton/CustomButton";
import { ARCS_STATE, EMPTY_GAME_STATE, LOCATIONS, MAPS } from "../util/constants";
import { shuffleArray } from "../../util/shuffleArray";
import { getOutOfPlayLocations } from "../util/helpers";
import AppInfo from "./AppInfo";

const NewGame = ({ handleGameStateChange }) => {
	const [nPlayers, setNPlayers] = useState(2)
	const [nLars, setNLars] = useState(1)
	const [selectedMap, setSelectedMap] = useState(null)
	const [infoSelected, setInfoSelected] = useState(false)

	const handlePlayerClick = (value) => {
		setNPlayers(value)
		setSelectedMap(null) // Reset selected map when changing number of players
	}

	const handleStartGame = () => {
		const gameState = {
			...JSON.parse(JSON.stringify(EMPTY_GAME_STATE)), // Start with an empty gameState
			dateTimeStarted: new Date().toLocaleString(),
			nPlayers,
			nLars,
			map: selectedMap,
		}

		// Determine which player number the Lars are
		const playersArray = shuffleArray(Array.from({length: nPlayers}, (_, i) => i + 1)).slice(0, nLars).sort()

		// Determine the starting Target Planet of the Lars
		const inPlayLocations = shuffleArray(LOCATIONS.filter(location => !getOutOfPlayLocations(MAPS[selectedMap]).includes(location)))

		for (let i = 0; i < nLars; i++) {
			gameState[`lars${i+1}`].playerNumber = playersArray[i]
			gameState[`lars${i+1}`].targetPlanet = inPlayLocations[i].slice(0,1) // From format <targetPlanet>-<targetPlanetID>
			gameState[`lars${i+1}`].targetPlanetID = inPlayLocations[i].slice(2,3) // From format <targetPlanet>-<targetPlanetID>
		}

		handleGameStateChange(gameState)
	}

	// Filter which maps to show based on the number of players
	const maps = Object.keys(MAPS).filter(map => map.startsWith(nPlayers.toString()))

	return (
		<div className="align-vertically center-align">
			{!infoSelected && <CustomButton value="Info" size="large" type="primary" onClick={() => setInfoSelected(true)} />}
			{infoSelected && <AppInfo handleCloseAppInfo={() => setInfoSelected(false)} />}

			<h1>New Game</h1>
			<div className="align-horizontally center-align block">
				<span># Players</span>
				<CustomButton value={2} size="small" selected={nPlayers === 2} onClick={() => handlePlayerClick(2)}/>
				<CustomButton value={3} size="small" selected={nPlayers === 3} onClick={() => handlePlayerClick(3)}/>
				<CustomButton value={4} size="small" selected={nPlayers === 4} onClick={() => handlePlayerClick(4)}/>
			</div>

			<div className="align-horizontally center-align block">
				<span># Lars</span>
				<CustomButton value={1} size="small" selected={nLars === 1} onClick={() => setNLars(1)}/>
				<CustomButton value={2} size="small" selected={nLars === 2} onClick={() => setNLars(2)}/>
			</div>

			<div className="align-vertically center-align block">
				<span>Map for {nPlayers} players</span>
				{maps.map((map, index) => (
					<CustomButton key={index} value={map.slice(1, map.length)} size="large" selected={selectedMap === map} onClick={() => setSelectedMap(map)}/>
				))}
			</div>

			{selectedMap && <CustomButton value={"Start Game"} size="large" type="primary" onClick={handleStartGame} />}

			{/*DEV CustomButton to be able to change the initial state*/}
			{/*<div className="start-game">*/}
			{/*	<ToggleButton value={"Remove State"} size="large" type="primary" onClick={() => localStorage.removeItem(ARCS_STATE)} />*/}
			{/*</div>*/}
		</div>
	)
}

export default NewGame