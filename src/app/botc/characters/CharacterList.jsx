import List from "../../objects/components/List";
import './../BloodOnTheClocktowerInteractions.scss'

const CharacterList = ({ characters }) => {
    return (
        <div className="character-list">
            <List items={characters} />
        </div>
    )
}

export default CharacterList