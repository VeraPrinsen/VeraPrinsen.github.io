import "../stylesheets/TextInput.scss"

const TextInput = ({ value, onChange }) => {
    return (
        <div className="input">
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default TextInput