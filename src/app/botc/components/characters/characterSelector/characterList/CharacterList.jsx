import SelectableCharacter from "./SelectableCharacter";

const CharacterList = ({ characters, selectedCharacters, onCharacterAdd, onCharacterDelete }) => {
    return (
        <div className="character-list">
            {characters.map(character => <SelectableCharacter
                key={character.name}
                character={character}
                selected={selectedCharacters.includes(character.name)}
                onCharacterAdd={onCharacterAdd}
                onCharacterDelete={onCharacterDelete}
            />)}
        </div>
    )
}

export default CharacterList;