import List from "../../objects/components/List";
import '../BOTC.scss'

const CharacterList = ({ characters }) => {
    return (
        <div className="character-list">
            <List items={characters} />
        </div>
    )
}

export default CharacterList