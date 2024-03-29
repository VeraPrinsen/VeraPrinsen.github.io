import React, {useEffect, useState} from "react"
import {loadCharacters} from "./characters/functions/loadCharacters";
import './BloodOnTheClocktowerInteractions.scss'
import CharacterList from "./characters/CharacterList";
import {AiOutlineDelete} from "react-icons/ai";

const BloodOnTheClocktowerInteractions = () => {
    const [characters, setCharacters] = useState([])
    const [selectedCharacters, setSelectedCharacters] = useState([])
    const [interactions, setInteractions] = useState([])

    const handleCharacterClick = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.length < 2) {
                return [...prevState, character.name]
            }
            return prevState
        })
    }

    // Load characters when loading the page
    useEffect(() => {
        loadCharacters(handleCharacterClick)
            .then(data => setCharacters(data))
    }, [])

    // Based on the characters selected, load the interactions
    // eslint-disable-next-line no-unused-vars
    const loadInteractions = (character1, character2) => {
        loadInteractions(character1, character2)
            .then(data => setInteractions(data))
    }

    console.log(selectedCharacters)
    const notSelectedCharacters = characters.filter(character => !selectedCharacters.includes(character.title))
    const selectedCharactersItems = characters.filter(character => selectedCharacters.includes(character.title))
    selectedCharactersItems.forEach(item => {
        item.action = React.createElement(AiOutlineDelete, { className: 'li-action-icon', onClick: () => {} })
    })

    return (
        <div className="main">
            <CharacterList characters={notSelectedCharacters} />
            <div className="interactions">
                <div><CharacterList characters={selectedCharactersItems} /></div>
                <div>{interactions.map(item => <div key={item}>{item}</div>)}</div>
            </div>
        </div>
    )
}

export default BloodOnTheClocktowerInteractions