import "./SelectedCharacters.scss"

const SelectedCharacters = ({ characters }) => {
    return (
        <div className="selected-characters">
            <div className="selected-character">
                <div>{characters[0]?.name}</div>
            </div>
            <div>{characters.length === 2 && "&"}</div>
            <div className="selected-character">
                <div>{characters[1]?.name}</div>
            </div>
        </div>
    )
}

export default SelectedCharacters