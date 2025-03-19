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
	const [filterOptions, toggleFilterOptions] = useState({
		"Trouble Brewing": true,
		"Bad Moon Rising": true,
		"Sects & Violets": true,
		"Kickstarter Experimental": true,
		"Unreleased Experimental": true,
		"Townsfolk": true,
		"Outsider": true,
		"Minion": true,
		"Demon": true,
		"Fabled": true
	})

	const handleSearchTermChange = (e) => {
		e.preventDefault()
		setSearchTerm(e.target.value)
	}

	const handleToggleFilterOptions = (key) => {
		toggleFilterOptions(prevState => {
			return {
				...prevState,
				[key]: !prevState[key]
			}
		})
	}

	const filteredCharacters = characters.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) && filterOptions[c.edition] && filterOptions[c.type])

	return (
		<div className="character-selector">
			<div className="filter">
				<div><input type="checkbox" checked={filterOptions["Trouble Brewing"]}
				            onChange={() => handleToggleFilterOptions("Trouble Brewing")}/> Trouble Brewing
				</div>
				<div><input type="checkbox" checked={filterOptions["Bad Moon Rising"]}
				            onChange={() => handleToggleFilterOptions("Bad Moon Rising")}/> Bad Moon Rising
				</div>
				<div><input type="checkbox" checked={filterOptions["Sects & Violets"]}
				            onChange={() => handleToggleFilterOptions("Sects & Violets")}/> Sects and Violets
				</div>
				<div><input type="checkbox" checked={filterOptions["Kickstarter Experimental"]}
				            onChange={() => handleToggleFilterOptions("Kickstarter Experimental")}/> Kickstarter Experimental
				</div>
				<div><input type="checkbox" checked={filterOptions["Unreleased Experimental"]}
				            onChange={() => handleToggleFilterOptions("Unreleased Experimental")}/> Unreleased Experimental
				</div>
			</div>
			<div className="search-bar"><input className='search-input' onChange={handleSearchTermChange}/></div>
			<CharacterList characters={filteredCharacters} selectedCharacters={selectedCharacters}
			               onCharacterAdd={onCharacterAdd} onCharacterDelete={onCharacterDelete}/>
			<div className="actions">CLEAR</div>
		</div>
	)
}

export default CharacterSelector