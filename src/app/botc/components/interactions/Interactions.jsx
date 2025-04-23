import './Interactions.scss'
import SelectedCharacters from "./selectedCharacters/SelectedCharacters";
import ShowInteractions from "./showInteractions/ShowInteractions";
import { useState } from "react";

const Interactions = ({selectedCharacterNames, interactions}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	return (
		<div className="interactions">
			<SelectedCharacters charactersNames={selectedCharacterNames}/>
			<ShowInteractions interactions={interactions}/>
			<div className="add-interaction">
				<input type="button" style={{ visibility: selectedCharacterNames.length === 2 ? "visible" : "hidden" }} onClick={() => setModalIsOpen(true)} value="Add Interaction" />
			</div>
			{modalIsOpen && <div className="modal">TEST</div>}
		</div>
	)
}

export default Interactions