import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { EMPTY_GAME_STATE } from "../util/constants";
import { useState } from "react";

const Game = ({ gameState, handleGameStateChange }) => {
	const [selectedLars, setSelectedLars] = useState(1)

	const handleResetGame = () => {
		handleGameStateChange(JSON.parse(JSON.stringify(EMPTY_GAME_STATE)))
	}

	return (
		<div className="game-container">
			<ToggleButton value={"Reset Game"} onClick={handleResetGame} selected/>
			<div className="datetime">Game started on {gameState.dateTimeStarted}</div>
			{gameState.nLars === 2 && (
				<div className="lars-selection">
					<ToggleButton value={"Lars 1"} selected={selectedLars === 1} onClick={() => setSelectedLars(1)} />
					<ToggleButton value={"Lars 2"} selected={selectedLars === 2} onClick={() => setSelectedLars(2)} />
				</div>
			)}
			<div className="lars-info">
				<div>{`Player ${gameState[`lars${selectedLars}`].playerNumber} --- Target planet: ${gameState[`lars${selectedLars}`].targetPlanet}`}</div>
			</div>
		</div>
	)
}

export default Game