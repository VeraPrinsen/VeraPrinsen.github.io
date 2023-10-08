import './boardgames/stylesheets/App.css';
import {useState} from "react";
import Menu from "./navigation/Menu";
import Page from "./navigation/Page";
import Boardgames from "./boardgames/Boardgames";

const Homepage = () => {
    const [currentPage, setPage] = useState("menu")

    const pages = [
        "Boardgames",
        "Custom yes/no door label"
    ]

    return (
        <div className="app">
            <header className="main-frame">
                {currentPage === "menu" && <Menu pages={pages} setPage={setPage} />}
                {currentPage === pages[0] && <Page title={pages[0]} setPage={setPage} content={<Boardgames />} />}
                {currentPage === pages[1] && <Page title={pages[1]} setPage={setPage} content={<div>Content</div>} />}
            </header>
        </div>
    )
}

export default Homepage;
