import React, {useEffect, useState} from "react"
import {loadCharacters} from "./functions/loadCharacters";
import {loadInteractions} from "./functions/loadInteractions";
import './BOTC.scss'
import CharacterList from "./components/CharacterList";
import {RxCross2} from "react-icons/rx";
import {AiOutlineDoubleRight} from "react-icons/ai";
import SelectedCharacters from "./components/SelectedCharacters";

const BOTC = () => {
    const [allCharacters, setAllCharacters] = useState([])
    const [selectedCharacters, setSelectedCharacters] = useState([])
    const [interactions, setInteractions] = useState([])

    // Load all characters when loading the page
    // TODO: Filter
    useEffect(() => {
        loadCharacters()
            .then(data => setAllCharacters(data))
    }, [])
    
    // When selecting a character, add it to the list, if there are not already 2 characters in the list
    const handleCharacterSelect = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.length < 2) {
                return [...prevState, character]
            }
            return prevState
        })
    }

    // When deleting a character, delete it from the selectedCharacters list
    const handleCharacterDelete = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.includes(character)) {
                return prevState.filter(item => item !== character)
            }
            return prevState
        })
    }

    // Based on the characters selected, load the interactions
    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        if (selectedCharacters.length === 2) {
            loadInteractions(selectedCharacters[0], selectedCharacters[1])
                .then(data => {
                    if (data.length === 0) {
                        setInteractions(["There is not data"])
                    } else {
                        setInteractions(data)
                    }
                })
        } else {
            setInteractions([])
        }
    }, [selectedCharacters, setInteractions])

    // Make a list of the characters that are not selected
    const notSelectedCharactersList = allCharacters.filter(character => !selectedCharacters.includes(character.name)).map(character => {
        return {
            id: character.name,
            title: character.name,
            action: React.createElement(AiOutlineDoubleRight, { className: 'li-action-icon', onClick: () => handleCharacterSelect(character.name) })
        }
    })

    // List of the selected characters
    const selectedCharactersList = allCharacters.filter(character => selectedCharacters.includes(character.name)).map(character => {
        return {
            name: character.name,
            action: React.createElement(RxCross2, { className: 'li-action-icon', onClick: () => handleCharacterDelete(character.name) })
        }
    })

    return (
        <div className="main">
            <CharacterList characters={notSelectedCharactersList} />
            <div className="interactions">
                <div><SelectedCharacters characters={selectedCharactersList} /></div>
                <div>{interactions.map(item => <div key={item}>{item}</div>)}</div>
            </div>
        </div>
    )
}

export default BOTC