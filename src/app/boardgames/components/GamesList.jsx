import React from "react"
import "../stylesheets/GamesBox.scss"
import List from "../../objects/components/List";

const GamesList = ({ games, onClickAction, onClickIcon }) => {
    // const [imageModal, setImageModal] = useState({
    //     show: false,
    //     image: {}
    // })
    //
    // const handleClickImage = (game) => {
    //     setImageModal({
    //         show: true,
    //         image: game.image
    //     })
    // }
    //
    // const handleCloseModal = () => {
    //     setImageModal({
    //         show: false,
    //         image: {}
    //     })
    // }

    const handleOnClick = (game) => {
        onClickAction(game)
    }

    const gamesToItems = games => {
        if (games.length > 0) {
            debugger
        }
        return games.map(game => {
            return {
                id: game.name,
                title: game.name,
                description: game.yearPublished,
                thumbnail: game.thumbnail,
                image: game.image,
                action: React.createElement(onClickIcon, { onClick: () => handleOnClick(game) })
            }
        })
    }

    return (
        <div className='games-list'>
            <List items={gamesToItems(games)} />
        </div>
    )
}

export default GamesList