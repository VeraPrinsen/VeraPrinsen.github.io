import "./CharacterSelector.scss";
import CharacterList from "./characterList/CharacterList";

const CharacterSelector = ({
                               characters,
                               selectedCharacters,
                               onCharacterAdd,
                               onCharacterDelete
}) => {
    return (
        <div className="character-selector">
            <div className="filter">FILTER</div>
            <div className="search-bar">SEARCH</div>
            <CharacterList characters={characters} selectedCharacters={selectedCharacters} onCharacterAdd={onCharacterAdd} onCharacterDelete={onCharacterDelete} />
            <div className="actions">CLEAR</div>
        </div>
    )
}

export default CharacterSelector