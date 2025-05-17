import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";

const Game = ({ gameState, handleGameStateChange }) => {

	const handleResetGame = () => {
		const gameState = {
			dateTimeStarted: null,
			map: null,
			nPlayers: null,
			nLars: null,
		}
		handleGameStateChange(gameState)
	}

	return (
		<div className="game-container">
			<ToggleButton value={"Reset Game"} onClick={handleResetGame} selected/>
			<div className="datetime">Game started on {gameState.dateTimeStarted}</div>

		</div>
	)
}

export default Game