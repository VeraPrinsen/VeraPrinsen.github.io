import Button from "../../objects/components/ToggleButton/Button";
import { EMPTY_GAME_STATE, LOCATIONS, MAPS } from "../util/constants";
import { useState } from "react";
import Lars from "./Lars";
import { randomNumber } from "../../util/randomNumber";
import AppInfo from "./AppInfo";
import EndOfChapter from "./EndOfChapter";

const Game = ({ gameState, handleGameStateChange }) => {
	const [infoSelected, setInfoSelected] = useState(false)
	const [endOfChapterSelected, setEndOfChapterSelected] = useState(false)
	const [selectedLars, setSelectedLars] = useState(1)

	const handleResetGame = () => {
		handleGameStateChange(JSON.parse(JSON.stringify(EMPTY_GAME_STATE)))
	}

	const handleMoveFocus = (nLars) => {
		const larsState = JSON.parse(JSON.stringify(gameState[`lars${nLars}`]))

		const nextPossibleLocations = LOCATIONS.filter(location => !MAPS[gameState.map].outOfPlay.includes(location) && !Object.values(MAPS[gameState.map].larsStarport).includes(location) && location !== larsState.targetPlanet + "-" + larsState.targetPlanetID)
		const randomPlanetNumber = randomNumber(0, nextPossibleLocations.length-1)

		larsState.targetPlanet = nextPossibleLocations[randomPlanetNumber].slice(0,1)
		larsState.targetPlanetID = nextPossibleLocations[randomPlanetNumber].slice(2,3)

		handleGameStateChange({
			[`lars${nLars}`]: larsState
		})
	}

	const handleEndOfChapterDone = () => {
		for (let i = 1; i <= gameState.nLars; i++) {
			handleMoveFocus(i)
		}

		setEndOfChapterSelected(false)
	}

	return (
		<div className="align-vertically center-align">
			{infoSelected && <AppInfo handleCloseAppInfo={() => setInfoSelected(false)} />}
			{!infoSelected && <Button value="Info" size="large" type="primary" onClick={() => setInfoSelected(true)} />}
			<div className="align-horizontally center-align">
				{!endOfChapterSelected && <Button value="End of Chapter" size="large" onClick={() => setEndOfChapterSelected(true)} />}
				{endOfChapterSelected && <Button value="Cancel" size="large" onClick={() => setEndOfChapterSelected(false)} />}
				<Button value="Reset Game" size="large" onClick={handleResetGame}/>
			</div>
			{endOfChapterSelected && <EndOfChapter handleConfirmEndOfChapter={handleEndOfChapterDone} handleExitEndOfChapter={() => setEndOfChapterSelected(false)} />}
			<div className="datetime center-align">Game started on {gameState.dateTimeStarted}</div>
			<div className="map-info center-align">{`Map: ${gameState.nPlayers} players, ${gameState.map.slice(1, gameState.map.length)}`}</div>
			{gameState.nLars === 2 && (
				<div className="align-horizontally center-align">
					<Button value={"Lars 1"} selected={selectedLars === 1} size="large" onClick={() => setSelectedLars(1)} />
					<Button value={"Lars 2"} selected={selectedLars === 2} size="large" onClick={() => setSelectedLars(2)} />
				</div>
			)}
			{selectedLars === 1 && (<Lars nLars={1} state={gameState.lars1} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
			{selectedLars === 2 && (<Lars nLars={2} state={gameState.lars2} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
		</div>
	)
}

export default Game