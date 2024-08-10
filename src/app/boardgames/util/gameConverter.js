import React from "react";

export const gamesToItems = (games, handleOnClick, onClickIcon, showImages) => {
    return games.map(game => {
        return {
            id: game.name,
            title: game.name,
            description: game.yearPublished,
            thumbnail: showImages ? game.thumbnail : '',
            image: showImages ? game.image : '',
            action: onClickIcon ? React.createElement(onClickIcon, { className: 'li-action-icon', onClick: () => handleOnClick(game) }) : null
        }
    })
}