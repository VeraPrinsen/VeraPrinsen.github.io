import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { EMPTY_GAME_STATE, LOCATIONS, MAPS } from "../util/constants";
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

		const nextPossibleLocations = LOCATIONS.filter(location => !MAPS[gameState.map].outOfPlay.includes(location) && !Object.values(MAPS[gameState.map].larsStarport).includes(location) && location !== larsState.targetPlanet + "-" + larsState.targetPlanetID)
		const randomPlanetNumber = randomNumber(1, nextPossibleLocations.length)

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

	if (basicRulesSelected) {
		return (
			<div className="game-container">
				<h1>Basic Rules</h1>

				<ul>
					<li>Use standard rules unless explicitly instructed otherwise.</li>
					<li>Lars ignores text on court cards.</li>
					<li>Lars does not build additional starports and its startport cannot be damaged.</li>
					<li>Deal action cards face down to each Lars.</li>
					<li>Lars will slide resources from the left on their board, discarding overflowing resources at the end of their turn. They get 1 Resource Power per discarded resource.</li>
					<li>If you have to target a system, in tiebreakers it is first the system closest to the Target Planet and then the system closest to the Lars starport.</li>
					<li>If you have to target to Lead player, this is always a rival with the most power, prioritising non Lars rivals first.</li>
					<li>Sometimes the app asks you to increase the Resource Power of Lars. Do this by placing cubes on it's play board. This comes into play in the End of Chapter Rules.</li>
				</ul>

				<h2>Vox Cards</h2>
				<span>When securing a Vox card, there might be some conditions that need to be met before Lars can Secure that card.</span>
				<ul>
					<li>Mass uprising: Is always Secured; Is resolved in the Cluster of the Target Planet.</li>
					<li>Populist demands: Lars must win an undeclared ambition; Is resolved on the ambition Lars is winning.</li>
					<li>Outrage spreads: Is always Secured; Is resolved maximising discards for the Lead player.</li>
					<li>Song of freedom: Lars must control a rival city; Is resolved prioritising the Lead player.</li>
					<li>Guild struggle: At least 1 rival must have a guild card; Is resolved prioritising the Lead player.</li>
					<li>Call to action: Is always Secured.</li>
				</ul>

				<ToggleButton value="Back" onClick={() => setBasicRulesSelected(false)} />
			</div>
		)
	} else if (endOfChapterSelected) {
		return (
			<div className="game-container">
				<h1>End of Chapter Rules</h1>

				<ul>
					<li>Score declared ambitions as normal, also taking Lars into account.</li>
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