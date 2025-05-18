import CustomButton from "../../objects/components/ToggleButton/CustomButton";

const EndOfChapter = ({ handleConfirmEndOfChapter }) => {
	return (
		<div className="align-vertically center-align">
			<h1>End of Chapter Rules</h1>

			<ul>
				<li>Score declared ambitions as normal, also taking Lars bots into account.</li>
				<li>Then, also score the undeclared ambitions only for the Lars bots, use the lowest ambition score token to determine points.</li>
				<li>Then, score the Resource Power of each Lars and then discard them. If Lars is first, he does not score. If
					Lars is second, he gets 1 point per Resource Power. Otherwise, Lars get's 2 points per Resource Power.
				</li>
				<li>The Target Planet will be moved automatically after clicking the "Confirm" button.</li>
			</ul>

			<CustomButton value="Confirm End of Chapter" type="primary" onClick={handleConfirmEndOfChapter}/>
		</div>
	)
}

export default EndOfChapter