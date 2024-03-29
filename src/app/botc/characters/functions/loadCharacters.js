import React from "react";
import { AiOutlineDoubleRight } from 'react-icons/ai'

export const loadCharacters = async (handleOnClick) => {
    const data = await import("./../characters.json")
        .then(module => module.default)

    const returnData = data.map(item => {
        return {
            id: item.name,
            title: item.name,
            action: React.createElement(AiOutlineDoubleRight, { className: 'li-action-icon', onClick: () => handleOnClick(item) })
        }
    })

    return returnData
}