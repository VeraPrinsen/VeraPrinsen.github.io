import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './navigation/components/Homepage'
import Boardgames from './boardgames/Boardgames'
import GameOfLife from './gameOfLife/GameOfLife'
import BOTC from './botc/BOTC'
import WIFO from "./wifo/WIFO";

export const REACHABLE_PAGES = [
    {
        title: 'Boardgames',
        path: '/boardgames',
        element: <Boardgames />
    },
    {
        title: 'Witch of Fern Island Resources',
        path: '/witch-of-fern-island',
        element: <WIFO />
    },
    {
        title: 'Game of Life',
        path: '/game-of-life',
        element: <GameOfLife />
    }
]

const App = () => {
    return (
        <div>
            <Routes>
                {/*Homepage*/}
                <Route exact path="/" element={<Homepage />} />

                {/*Pages reachable from the Homepage*/}
                {REACHABLE_PAGES.map(page => <Route exact path={page.path} element={page.element} key={page.title} />)}

                {/*'Invisible' pages*/}
                <Route path='/botc-interactions' element={<BOTC />} />
            </Routes>
        </div>
    )
}

export default App