import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { EMPTY_GAME_STATE, MAPS } from "../util/constants";
import { useState } from "react";
import Lars from "./Lars";
import { randomNumber } from "../../util/randomNumber";

const Game = ({ gameState, handleGameStateChange }) => {
	const [basicRulesSelected, setBasicRulesSelected] = useState(false)
	const [endOfChapterSelected, setEndOfChapterSelected] = useState(false)
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

	const handleEndOfChapterDone = () => {
		for (let i = 1; i <= gameState.nLars; i++) {
			handleMoveFocus(i)
		}

		setEndOfChapterSelected(false)
	}

	if (basicRulesSelected) {
		return (
			<div className="game-container">
				<h1>Basic Rules</h1>

				<ul>
					<li>Use standard rules unless explicitly instructed otherwise</li>
					<li>Lars ignores text on court cards</li>
					<li>Lars does not build additional starports and its startport cannot be damaged</li>
					<li>Deal action cards face down to each Lars</li>
					<li>If you have to target a system, in tiebreakers it is first the system closest to the Target Planet and then the system closest to the Lars starport</li>
					<li>Sometimes the app asks you to increase the Resource Power of Lars. Do this by placing cubes on it's play board. This comes into play in the End of Chapter Rules.</li>
				</ul>

				<ToggleButton value="Back" onClick={() => setBasicRulesSelected(false)} />
			</div>
		)
	} else if (endOfChapterSelected) {
		return (
			<div className="game-container">
				<h1>End of Chapter Rules</h1>

				<ul>
					<li>Score declared ambitions as normal, also taking Lars into account</li>
					<li>Then, also score the undeclared ambitions only for the Lars bots, use the lowest ambition score token.</li>
					<li>Then, score the Resource Power of each Lars and then discard them. If Lars is first, he does not score. If Lars is second, he gets 1 point per Resource Power. Otherwise, Lars get's 2 points per Resource Power.</li>
					<li>The Focus of the Target Planet will be moved automatically after clicking the "Done" button.</li>
				</ul>

				<ToggleButton value="Done" onClick={handleEndOfChapterDone}/>
			</div>
		)
	} else {
		return (
			<div className="game-container">
				<div className="sideways-buttons">
					<ToggleButton value={"Basic Rules"} onClick={() => setBasicRulesSelected(true)}/>
					<ToggleButton value={"End of Chapter"} onClick={() => setEndOfChapterSelected(true)}/>
				</div>
				<ToggleButton value={"Reset Game"} onClick={handleResetGame}/>
				<div className="datetime">Game started on {gameState.dateTimeStarted}</div>
				<div className="map-info">{`Map: ${gameState.nPlayers} players, ${gameState.map.slice(1, gameState.map.length)}`}</div>
				{gameState.nLars === 2 && (
					<div className="sideways-buttons">
						<ToggleButton value={"Lars 1"} selected={selectedLars === 1} onClick={() => setSelectedLars(1)} />
						<ToggleButton value={"Lars 2"} selected={selectedLars === 2} onClick={() => setSelectedLars(2)} />
					</div>
				)}
				{selectedLars === 1 && (<Lars nLars={1} state={gameState.lars1} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
				{selectedLars === 2 && (<Lars nLars={2} state={gameState.lars2} map={MAPS[gameState.map]} handleMoveFocus={handleMoveFocus} />)}
			</div>
		)
	}
}

export default Game