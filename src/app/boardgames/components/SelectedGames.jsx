import '../stylesheets/GamesBox.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import GamesList from './GamesList'

const SelectedGames = ({
    selectedGames,
    removeGame,
    showDetails,
    showImages
}) => {
    return (
        <div className='main-box games-list-box'>
            <GamesList
                games={selectedGames}
                onClickAction={removeGame}
                onClickIcon={AiOutlineDelete}
                showDetails={showDetails}
                showImages={showImages}
            />
        </div>
    )
}

export default SelectedGames