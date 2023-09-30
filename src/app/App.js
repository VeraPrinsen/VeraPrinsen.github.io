import './stylesheets/App.css';
import {useState} from "react";
import Menu from "./components/Menu";
import Page from "./components/Page";

const App = () => {
    const [currentPage, setPage] = useState("menu")

    const pages = [
        "Boardgames",
        "Custom yes/no door label"
    ]

    return (
        <div className="app">
            <header className="main-frame">
                {currentPage === "menu" && <Menu pages={pages}  setPage={setPage} />}
                {pages.map(p => (currentPage === p && <Page title={p} setPage={setPage} />))}
            </header>
        </div>
    );
}

export default App;
