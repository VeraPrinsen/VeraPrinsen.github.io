import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { EMPTY_GAME_STATE, MAPS } from "../util/constants";
import { useState } from "react";
import Lars from "./Lars";
import { randomNumber } from "../../util/randomNumber";

const Game = ({ gameState, handleGameStateChange }) => {
	const [selectedLars, setSelectedLars] = useState(1)

	const handleResetGame = () => {
		handleGameStateChange(JSON.parse(JSON.stringify(EMPTY_GAME_STATE)))
	}

	const handleMoveFocus = (nLars) => {
		const larsState = JSON.parse(JSON.stringify(gameState[`lars${nLars}`]))

		const nextPossibleClusters = Object.keys(MAPS[gameState.map].courtCards).filter(planet => planet !== larsState.targetPlanet)
		const randomPlanetNumber = randomNumber(1, nextPossibleClusters.length)

		larsState.targetPlanet = nextPossibleClusters[randomPlanetNumber].toString()
		larsState.targetPlanetID = randomNumber(1,3).toString()

		handleGameStateChange({
			[`lars${nLars}`]: larsState
		})
	}

	return (
		<div className="game-container">
			<ToggleButton value={"Reset Game"} onClick={handleResetGame} />
			<div className="datetime">Game started on {gameState.dateTimeStarted}</div>
			{gameState.nLars === 2 && (
				<div className="lars-selection">
					<ToggleButton value={"Lars 1"} selected={selectedLars === 1} onClick={() => setSelectedLars(1)} />
					<ToggleButton value={"Lars 2"} selected={selectedLars === 2} onClick={() => setSelectedLars(2)} />
				</div>
			)}
			{selectedLars === 1 && (<Lars nLars={1} state={gameState.lars1} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
			{selectedLars === 2 && (<Lars nLars={2} state={gameState.lars2} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
		</div>
	)
}

export default Game