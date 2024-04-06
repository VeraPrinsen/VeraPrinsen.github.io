const SelectableCharacter = ({ character, selected = false, onCharacterAdd, onCharacterDelete }) => {
    const handleCharacterClick = () => {
        if (selected) {
            onCharacterDelete(character)
        } else {
            onCharacterAdd(character)
        }
    }

    let classNames = "character "
    classNames += selected ? "selected" : "selectable"

    return <div
        className={classNames}
        onClick={handleCharacterClick}>
        {character.name}
    </div>
}

export default SelectableCharacter