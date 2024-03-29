import './App.css'
import { Route, Routes } from 'react-router-dom'
import PaymentRequest from './gripjes/PaymentRequest'
import Homepage from './navigation/components/Homepage'
import Boardgames from './boardgames/Boardgames'
import GameOfLife from './gameOfLife/GameOfLife'
import BloodOnTheClocktowerInteractions from './botc/BloodOnTheClocktowerInteractions'

export const REACHABLE_PAGES = [
    {
        title: 'Boardgames',
        path: '/boardgames',
        element: <Boardgames />
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
                <Route path='/gripjes' element={<PaymentRequest />} />
                <Route path='/botc-interactions' element={<BloodOnTheClocktowerInteractions />} />
            </Routes>
        </div>
    )
}

export default App