import './Interactions.scss'
import SelectedCharacters from "./selectedCharacters/SelectedCharacters";
import ShowInteractions from "./showInteractions/ShowInteractions";

const Interactions = ({ selectedCharacterNames, interactions }) => {
    return (
        <div className="interactions">
            <SelectedCharacters charactersNames={selectedCharacterNames} />
            <ShowInteractions interactions={interactions} />
        </div>
    )
}

export default Interactions