import './Interactions.scss'
import SelectedCharacters from "./selectedCharacters/SelectedCharacters";

const Interactions = ({ selectedCharacterNames }) => {
    return (
        <div className="interactions">
            <SelectedCharacters charactersNames={selectedCharacterNames} />
            <div>INTERACTIONS</div>
        </div>
    )
}

export default Interactions