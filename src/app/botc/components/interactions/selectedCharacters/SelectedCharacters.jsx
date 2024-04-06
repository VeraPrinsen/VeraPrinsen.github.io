const SelectedCharacters = ({ charactersNames }) => {
    return (
        <div className="selected-characters">
            <div>{charactersNames[0]}</div>
            <div>{charactersNames.length === 2 && "&"}</div>
            <div>{charactersNames[1]}</div>
        </div>
    )
}

export default SelectedCharacters