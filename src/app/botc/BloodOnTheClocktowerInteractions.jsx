import * as character from './characters/constants.js'
import {useState} from "react"
import {loadCharacters} from "./characters/loadCharacters"

const BloodOnTheClocktowerInteractions = () => {
    const [data, setData] = useState([])

    const loadInteractions = (character1, character2) => {
        loadCharacters(character1, character2)
            .then(data => setData(data))
    }

    return (
        <div>
            <div>TEST</div>
            <button onClick={() => loadInteractions(character.RECLUSE, character.EMPATH)}>Empath, Recluse</button>
            <div>{data.map(item => <div key={item}>{item}</div>)}</div>
        </div>
    )
}

export default BloodOnTheClocktowerInteractions