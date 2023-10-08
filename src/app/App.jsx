import './stylesheets/App.css';
import { Route, Routes, Link } from "react-router-dom";
import PaymentRequest from "./PaymentRequest";
import Homepage from "./Homepage";

const App = () => {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul id="navigation">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/gripjes">Gripjes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/gripjes" element={<PaymentRequest />} />
            </Routes>
        </div>
    )
}

export default App;
