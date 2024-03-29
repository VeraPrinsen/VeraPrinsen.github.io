import React, {useEffect, useState} from "react"
import {loadCharacters} from "./characters/functions/loadCharacters";
import './BloodOnTheClocktowerInteractions.scss'
import CharacterList from "./characters/CharacterList";
import {AiOutlineDelete} from "react-icons/ai";
import {AiOutlineDoubleRight} from "react-icons/ai";

const BloodOnTheClocktowerInteractions = () => {
    const [allCharacters, setAllCharacters] = useState([])
    const [selectedCharacters, setSelectedCharacters] = useState([])
    const [interactions, setInteractions] = useState([])

    const handleCharacterSelect = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.length < 2) {
                return [...prevState, character]
            }
            return prevState
        })
    }

    const handleCharacterDelete = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.includes(character)) {
                return prevState.filter(item => item !== character)
            }
            return prevState
        })
    }

    // Load characters when loading the page
    useEffect(() => {
        loadCharacters()
            .then(data => setAllCharacters(data))
    }, [])

    // Based on the characters selected, load the interactions
    // eslint-disable-next-line no-unused-vars
    const loadInteractions = (character1, character2) => {
        loadInteractions(character1, character2)
            .then(data => setInteractions(data))
    }

    const notSelectedCharactersList = allCharacters.filter(character => !selectedCharacters.includes(character.name)).map(character => {
        return {
            id: character.name,
            title: character.name,
            action: React.createElement(AiOutlineDoubleRight, { className: 'li-action-icon', onClick: () => handleCharacterSelect(character.name) })
        }
    })

    const selectedCharactersList = allCharacters.filter(character => selectedCharacters.includes(character.name)).map(character => {
        return {
            id: character.name,
            title: character.name,
            action: React.createElement(AiOutlineDelete, { className: 'li-action-icon', onClick: () => handleCharacterDelete(character.name) })
        }
    })

    console.log(selectedCharactersList)

    return (
        <div className="main">
            <CharacterList characters={notSelectedCharactersList} />
            <div className="interactions">
                <div><CharacterList characters={selectedCharactersList} /></div>
                <div>{interactions.map(item => <div key={item}>{item}</div>)}</div>
            </div>
        </div>
    )
}

export default BloodOnTheClocktowerInteractions