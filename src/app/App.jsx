import './App.css'
import { Route, Routes } from "react-router-dom"
import PaymentRequest from "./gripjes/PaymentRequest"
import Homepage from "./navigation/components/Homepage"
import Boardgames from "./boardgames/Boardgames"

export const REACHABLE_PAGES = [
    {
        title: "Boardgames",
        path: "/boardgames",
        element: <Boardgames />
    },
    {
        title: "Test",
        path: "/test",
        element: <div>TEST</div>
    }
]

const App = () => {
    return (
        <Routes>
            {/*Homepage*/}
            <Route exact path="/" element={<Homepage />} />

            {/*Pages reachable from the Homepage*/}
            {REACHABLE_PAGES.map(page => <Route exact path={page.path} element={page.element} />)}

            {/*'Invisible' pages*/}
            <Route path="/gripjes" element={<PaymentRequest />} />
        </Routes>
    )
}

export default App;
