import { get } from './api'

export function searchBoardGame(searchTerm) {
    return get(`https://api.boardgameatlas.com/api/search?name=${searchTerm}`)
}