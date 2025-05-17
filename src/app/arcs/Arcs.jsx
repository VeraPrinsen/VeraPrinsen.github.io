import Hub from "../navigation/components/Hub"
import { useState } from "react"
import NewGame from "./components/NewGame"
import Game from "./components/Game";
import { ARCS_STATE, EMPTY_GAME_STATE } from "./util/constants";
import './Arcs.scss'

const Arcs = () => {
	const [gameState, setGameState] = useState(localStorage.getItem(ARCS_STATE) ? JSON.parse(localStorage.getItem(ARCS_STATE)) : JSON.stringify(EMPTY_GAME_STATE))

	const handleGameStateChange = (object) => {
		setGameState(prevState => {
			const newState = { ...prevState, ...object }
			localStorage.setItem(ARCS_STATE, JSON.stringify(newState))
			return newState
		})
	}

	{/*
				Button to reset the game
				Setup: Normal setup + Target planet for Lars
				Play - Draw card, roll assault die
					Flame: Declare ambition of card
					Double hit: Focus Target planet to other planet (randomly)

			*/}
	return (
		<>
			<Hub title="Arcs - Lars" />
			<div className="arcs-main-app">
				{!gameState.map && <NewGame handleGameStateChange={handleGameStateChange} />}
				{gameState.map && <Game gameState={gameState} handleGameStateChange={handleGameStateChange} />}
			</div>
		</>
	)
}

export default Arcs