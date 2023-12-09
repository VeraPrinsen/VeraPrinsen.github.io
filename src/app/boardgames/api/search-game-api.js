import { get } from './api'
import {xmlToBoardgamesList} from '../util/xmlToBoardgameConverter'

export function search(searchTerm) {
    return get(`https://boardgamegeek.com/xmlapi2/search?query=${searchTerm}`)
        .then(xml => {
            let allItems = xml.children[0]
            let itemIds = []
            for (let i = 0; i < allItems.getAttribute('total'); i++) {
                let item = allItems.children[i]
                if (item.getAttribute('type') === 'boardgame') {
                    itemIds.push(item.id)
                }
            }
            return searchBoardGames(itemIds)
        })
        .then(response => [].slice.call(response))
        .catch(error => console.log(error))
}

export function searchBoardGames(ids) {
    return get(`https://boardgamegeek.com/xmlapi2/thing?id=${ids.join(',')}`)
        .then(xml => xmlToBoardgamesList(xml.children[0]))
}