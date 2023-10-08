import './boardgames/stylesheets/App.css';
import { Route, Routes } from "react-router-dom";
import PaymentRequest from "./gripjes/PaymentRequest";
import Homepage from "./Homepage";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/gripjes" element={<PaymentRequest />} />
        </Routes>
    )
}

export default App;
