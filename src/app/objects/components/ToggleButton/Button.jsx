import './Button.scss'

// If size is not specified, it defaults to fit the content
// If type is not specified, it defaults to a lightgray background
const Button = ({value, selected, onClick, size, type }) => {
	let className = `custom-button`
	if (type === undefined) className += selected ? ' selection-selected' : ' selection-not-selected'
	if (type === 'primary') className += selected ? ' primary-selected' : ' primary-not-selected'
	if (size === 'small') className += ' small'
	if (size === 'large') className += ' large'

	return (
		<div className={className} onClick={onClick}>
			{value}
		</div>
	)
}

export default Button