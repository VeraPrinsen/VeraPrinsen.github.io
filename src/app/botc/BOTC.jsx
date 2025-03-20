import React, {useEffect, useState} from "react"
import {loadCharacters} from "./functions/loadCharacters";
import {loadInteractions} from "./functions/loadInteractions";
import CharacterSelector from "./components/characters/characterSelector/CharacterSelector";
import './BOTC.scss'
import Interactions from "./components/interactions/Interactions";

const BOTC = () => {
    const [allCharacters, setAllCharacters] = useState([])
    const [selectedCharacters, setSelectedCharacters] = useState([])
    const [interactions, setInteractions] = useState([])

    // Load all characters when loading the page
    useEffect(() => {
        loadCharacters()
            .then(data => setAllCharacters(data))
    }, [])
    
    // When selecting a character, add it to the list, if there are not already 2 characters in the list
    const handleCharacterAdd = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.length < 2) {
                return [...prevState, character.name]
            }
            return prevState
        })
    }

    // When deleting a character, delete it from the selectedCharacters list
    const handleCharacterDelete = (character) => {
        setSelectedCharacters(prevState => {
            if (prevState.includes(character.name)) {
                return prevState.filter(item => item !== character.name)
            }
            return prevState
        })
    }

    // Clicking the clear button, clears the selected characters
    // eslint-disable-next-line no-unused-vars
    const handleClear = () => {
        setSelectedCharacters([])
    }

    // Based on the characters selected, load the interactions
    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        if (selectedCharacters.length === 2) {
            loadInteractions(selectedCharacters[0], selectedCharacters[1])
                .then(data => {
                    if (data.length === 0) {
                        setInteractions(["There are no known interactions between these characters (The tool is not complete, so we're still adding interactions)."])
                    } else {
                        setInteractions(data)
                    }
                })
        } else {
            setInteractions([])
        }
    }, [selectedCharacters, setInteractions])

    return (
        <div className="main">
            <CharacterSelector
                characters={allCharacters}
                selectedCharacters={selectedCharacters}
                onCharacterAdd={handleCharacterAdd}
                onCharacterDelete={handleCharacterDelete}
                onClear={handleClear}
            />
            <Interactions
                selectedCharacterNames={selectedCharacters}
                interactions={interactions}
            />
        </div>
    )
}

export default BOTC