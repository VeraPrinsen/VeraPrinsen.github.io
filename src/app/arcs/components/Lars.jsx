import ToggleButton from "../../objects/components/ToggleButton/ToggleButton";
import { randomNumber } from "../../util/randomNumber";
import { useState } from "react";
import ListItemWithInfo from "./ListItemWithInfo";
import { ID } from "../util/constants";

const Lars = ({ nLars, state, map, handleMoveFocus }) => {
	const [playLeadCard, setPlayLeadCard] = useState(false);
	const [playFollowCard, setPlayFollowCard] = useState(false);
	const [cardSuit, setCardSuit] = useState(null);

	const [showInstructions, setShowInstructions] = useState(false);
	const [declareAmbition, setDeclareAmbition] = useState(null);
	const [copyLeadCard, setCopyLeadCard] = useState(null);
	const [seizeInitiative, setSeizeInitiative] = useState(null);
	const [moveFocus, setMoveFocus] = useState(null);

	const [doneButton, setDoneButton] = useState(false);

	const fDeclareAmbition = () => {
		if (randomNumber(1, 2) === 1) {
			setDeclareAmbition(true)
		} else {
			setDeclareAmbition(false)
		}
	}

	const fMoveFocus = () => {
		if (randomNumber(1, 3) === 1) {
			setMoveFocus(true)
		} else {
			setMoveFocus(false)
		}
	}

	const fCopyLeadCard = () => {
		if (randomNumber(1, 2) === 1) {
			setCopyLeadCard(true)
		} else {
			setCopyLeadCard(false)
		}
	}

	const fSeizeInitiative = () => {
		if (randomNumber(1, 6) === 1) {
			setSeizeInitiative(true)
		} else {
			setSeizeInitiative(false)
		}
	}

	const handlePlayLeadCard = () => {
		if (playLeadCard) {
			return
		}

		setPlayLeadCard(true)
		fDeclareAmbition()
		fMoveFocus()

		setDoneButton(true)
	}

	const handlePlayFollowCard = () => {
		if (playFollowCard) {
			return
		}

		setPlayFollowCard(true)
		fMoveFocus()
		fCopyLeadCard()
		fSeizeInitiative()

		setDoneButton(true)
	}

	const handleSuitButton = (value) => {
		setCardSuit(value)
		setShowInstructions(true)
	}

	const handleDoneButton = () => {
		if (moveFocus) {
			handleMoveFocus(nLars)
		}

		setPlayLeadCard(false)
		setPlayFollowCard(false)
		setCardSuit(null)
		setDeclareAmbition(null)
		setCopyLeadCard(null)
		setMoveFocus(null)
		setShowInstructions(false)
		setDoneButton(false)
	}

	const showInfluenceInstructions = () => {
		let main;
		let rival;
		switch (randomNumber(1, 6)) {
			case 1:
			case 2:
				main = `Add 1 agent to court card ${map.courtCards[state.targetPlanet]}`
				break
			case 3:
			case 4:
				main = `Add 2 agents to court card ${map.courtCards[state.targetPlanet]}`
				break
			case 5:
				main = `Add 1 agent to court card ${map.courtCards[state.targetPlanet]}`
				rival = `Add 1 agent to each court card with rival agents`
				break
		}

		const returnDivs = []
		if (main) returnDivs.push(<ListItemWithInfo item={main} />)
		if (rival) returnDivs.push(<ListItemWithInfo item={rival} />)
		return returnDivs
	}

	const showRepairInstructions = () => {
		const main = `Repair all loyal buildings`
		const focus = `Repair 1 loyal ship in the Gate of Cluster ${state.targetPlanet}`
		const id = `Repair 1 loyal ship on each planet of symbol ${state.targetPlanetID}`

		return [
			<ListItemWithInfo item={main} />,
			<ListItemWithInfo item={focus} />,
			<ListItemWithInfo item={id} />
		]
	}

	const showBuildInstructions = () => {
		const city = `Priority: Planets with symbol ${state.targetPlanetID} > Different planet resource than other cities > Most fresh loyal ships`

		return [
			<ListItemWithInfo item="Build 1 city where Lars has control" info={city} />,
			<ListItemWithInfo item="Build 3 ships at starport" />,
			<ListItemWithInfo item="If nothing was build, repair all loyal ships and buildings" />
		]
	}

	const showMoveInstructions = () => {
		const move = `It wants to control all systems in this order: Target planet (Cluster ${state.targetPlanet} - ${ID[state.targetPlanetID]}) > Planets with empty building slots > Planets with rival cities > Planets with rival starports > Planets with rival ships > The Gate (?). If it cannot catapult to the system, it will first move ships to systems on the way to control.`

		return [
			<ListItemWithInfo item="Remove fresh loyal ships from systems with no rival ships (leave 1 behind if there are buildings)" />,
			<ListItemWithInfo item="Place removed ships on planet with owned starport" />,
			<ListItemWithInfo item="Catapult move ships from starport until there are none left" info={move} />
		]
	}

	const showBattleInstructions = () => {
		return [
			<ListItemWithInfo item="In each system with rival ships. battle once with only skirmish dice." info="Defender: Rival with most power. Maximise the number of damaged ships." />,
			<ListItemWithInfo item={`In the Gate of Cluster ${state.targetPlanet} and all ${state.targetPlanetID} planets, battle once. See info.`} info="Defender: Rival with most power. If defender has city and no ships: roll up to 2 raid dice per defender city, remainder skirmish dice, defender chooses what gets stolen, don't provoke outrage. Otherwise: Round half (up) assault dice, remainder skirmish dice." />
		]
	}

	const showSuitInstructions = () => {
		const returnDivs = []

		switch (cardSuit) {
			case "Aggression":
				returnDivs.push(<ListItemWithInfo item="Secure all cards in court where Lars has more agents" />)
				returnDivs.push(showMoveInstructions())
				returnDivs.push(showBattleInstructions())
				break;
			case "Administration":
				returnDivs.push(showInfluenceInstructions())
				returnDivs.push(showRepairInstructions())
		returnDivs.push(<ListItemWithInfo item="Tax all valid cities" info="Owned and controlled rival cities" />)
				break
			case "Mobilisation":
				returnDivs.push(showInfluenceInstructions())
				returnDivs.push(showMoveInstructions())
			case "Construction":
				returnDivs.push(showRepairInstructions())
				returnDivs.push(showBuildInstructions())
		}

		return returnDivs
	}

	return (
		<div className="lars-container">
			<div>{`Player ${state.playerNumber}`}</div>
			<div>{`Target planet: Cluster ${state.targetPlanet} - ${ID[state.targetPlanetID]}`}</div>
			<div className="play-card">
				{playFollowCard !== true && <ToggleButton value="Play lead card" onClick={handlePlayLeadCard} selected={playLeadCard} />}
				{playLeadCard !== true && <ToggleButton value="Play follow card" onClick={handlePlayFollowCard} selected={playFollowCard} />}
			</div>
			{(playLeadCard || playFollowCard) && (
				<div className="suits">
					{(cardSuit === null || cardSuit === "Aggression") && <ToggleButton value="Aggression" onClick={() => handleSuitButton("Aggression")} selected={cardSuit === "Aggression"} />}
					{(cardSuit === null || cardSuit === "Administration") && <ToggleButton value="Administration" onClick={() => handleSuitButton("Administration")} selected={cardSuit === "Administration"} />}
					{(cardSuit === null || cardSuit === "Mobilisation") && <ToggleButton value="Mobilisation" onClick={() => handleSuitButton("Mobilisation")} selected={cardSuit === "Mobilisation"} />}
					{(cardSuit === null || cardSuit === "Construction") && <ToggleButton value="Construction" onClick={() => handleSuitButton("Construction")} selected={cardSuit === "Construction"} />}
				</div>
			)}
			{showInstructions && (
				<>
					<div className="lars-instructions">
						{declareAmbition && <ListItemWithInfo item="Declare ambition" info="Declare highest ambition to the corresponding card" />}
						{copyLeadCard && <ListItemWithInfo item="Copy lead card" info="Play card face down" />}
						{seizeInitiative && <ListItemWithInfo item="Seize initiative. Increase Resource power by 2." info="Take the first player marker if it is available if Lars can lead next turn." />}
						{showSuitInstructions()}
						{moveFocus && <ListItemWithInfo item="At the end of the turn, Focus of the Target Planet will be moved automatically." />}
					</div>
					{doneButton && <ToggleButton value="Done" onClick={handleDoneButton} />}
				</>
			)}
		</div>
	)
}

export default Lars