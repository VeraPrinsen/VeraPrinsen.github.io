const scriptShort = {
    "Trouble Brewing": "TB",
    "Sects & Violets": "SnV",
    "Bad Moon Rising": "BMR",
    "Kickstarter Experimental": "Experimental",
    "Unreleased Experimental": "Experimental"
}

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
        {character.name} <span className="additional-info">({character.type} - {scriptShort[character.edition]})</span>
    </div>
}

export default SelectableCharacter