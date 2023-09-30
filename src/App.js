import './App.css';
import {useState} from "react";
import Menu from "./components/Menu";
import Page from "./components/Page";

const App = () => {
    const [page, setPage] = useState("menu")

    return (
        <div className="App">
            <header className="App-header">
                {page === "menu" && <Menu setPage={setPage} />}
                {page === "page" && <Page setPage={setPage} />}
            </header>
        </div>
    );
}

export default App;
