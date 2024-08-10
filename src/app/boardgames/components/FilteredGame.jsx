const FilteredGame = ({ game, filteredOnPlayers, filteredOnPlayTime }) => {
    return (
        <div className="filtered-game">
            <div className="name">{game.name}</div>
            <div className="players">{game.minPlayers} - {game.maxPlayers} players</div>
            <div className="time">{game.minPlayTime} - {game.maxPlayTime} minutes</div>
        </div>
    )
}

export default FilteredGame