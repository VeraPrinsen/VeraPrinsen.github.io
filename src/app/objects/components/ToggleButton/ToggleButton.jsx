import './ToggleButton.scss'

const ToggleButton = ({value, selected, onClick}) => {
	const className = `toggle-button ${selected ? 'selected' : 'not-selected'}`

	return (
		<div className={className} onClick={onClick}>
			{value}
		</div>
	)
}

export default ToggleButton