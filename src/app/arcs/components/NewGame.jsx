import { useState } from "react";
import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { MAPS } from "../util/constants";

const NewGame = ({ handleGameStateChange }) => {
	const [nPlayers, setNPlayers] = useState(2)
	const [nLars, setNLars] = useState(1)
	const [selectedMap, setSelectedMap] = useState(null)

	const handlePlayerClick = (value) => {
		setNPlayers(value)
		setSelectedMap(null)
	}

	const handleStartGame = () => {
		const gameState = {
			dateTimeStarted: new Date().toLocaleString(),
			map: selectedMap,
			nPlayers: nPlayers,
			nLars: nLars,
		}
		handleGameStateChange(gameState)
	}

	const maps = MAPS.filter(map => map.startsWith(nPlayers))

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
					<ToggleButton key={index} value={map.slice(1, map.length)} selected={selectedMap === map} onClick={() => setSelectedMap(map)}/>
				))}
			</div>

			{selectedMap && (
				<div className="start-game">
					<ToggleButton value={"Start Game"} onClick={handleStartGame} selected/>
				</div>
			)}
		</div>
	)
}

export default NewGame