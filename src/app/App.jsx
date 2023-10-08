import './stylesheets/App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentRequest from "./PaymentRequest";
import Homepage from "./Homepage";

const router = createBrowserRouter([
    { path: "", element: <Homepage /> },
    { path: "/gripjes", element: <PaymentRequest/> }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
