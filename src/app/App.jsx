import './stylesheets/App.css';
import {useState} from "react";
import Menu from "./components/navigation/Menu";
import Page from "./components/navigation/Page";
import Boardgames from "./pages/Boardgames";

const App = () => {
    const [currentPage, setPage] = useState("menu")

    const pages = [
        "Boardgames",
        "Custom yes/no door label"
    ]

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>
            <button onClick={() => openInNewTab("https://betaalverzoek.rabobank.nl/betaalverzoek/?id=nhbnMrYkQMKje6uc1xwHaQ")}>Betaal gripje(s)</button>
        </div>
        // <div className="app">
        //     <header className="main-frame">
        //         {currentPage === "menu" && <Menu pages={pages} setPage={setPage} />}
        //         {currentPage === pages[0] && <Page title={pages[0]} setPage={setPage} content={<Boardgames />} />}
        //         {currentPage === pages[1] && <Page title={pages[1]} setPage={setPage} content={<div>Content</div>} />}
        //     </header>
        // </div>
    );
}

export default App;
