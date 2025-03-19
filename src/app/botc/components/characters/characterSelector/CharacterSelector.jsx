import "./CharacterSelector.scss";
import CharacterList from "./characterList/CharacterList";
import { useState } from "react";

const CharacterSelector = ({
	                           characters,
	                           selectedCharacters,
	                           onCharacterAdd,
	                           onCharacterDelete
                           }) => {
	const [searchTerm, setSearchTerm] = useState("")

	const handleSearchTermChange = (e) => {
		e.preventDefault()
		setSearchTerm(e.target.value)
	}

	const searchedCharacters = characters.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))

	return (
		<div className="character-selector">
			<div className="filter">FILTER</div>
			<div className="search-bar"><input className='search-input' onChange={handleSearchTermChange}/></div>
			<CharacterList characters={searchedCharacters} selectedCharacters={selectedCharacters}
			               onCharacterAdd={onCharacterAdd} onCharacterDelete={onCharacterDelete}/>
			<div className="actions">CLEAR</div>
		</div>
	)
}

export default CharacterSelector