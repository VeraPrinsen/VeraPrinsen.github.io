import {useEffect, useState} from "react"
import {loadCharacters} from "./characters/functions/loadCharacters";
import List from "../objects/components/List";

const BloodOnTheClocktowerInteractions = () => {
    const [characters, setCharacters] = useState([])
    const [data, setData] = useState([])

    // Load characters when loading the page
    useEffect(() => {
        loadCharacters()
            .then(data => setCharacters(data))
    }, [])

    // Based on the characters selected, load the interactions
    const loadInteractions = (character1, character2) => {
        loadInteractions(character1, character2)
            .then(data => setData(data))
    }

    return (
        <div>
            <List items={characters} />
            <button onClick={() => loadInteractions("Recluse", "Empath")}>Empath, Recluse</button>
            <div>{data.map(item => <div key={item}>{item}</div>)}</div>
        </div>
    )
}

export default BloodOnTheClocktowerInteractions