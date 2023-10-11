import "../stylesheets/Hub.css"
import { AiFillHome } from "react-icons/ai"
import {useNavigate} from "react-router-dom";

const Hub = () => {

    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/")
    }

    return (
        <div className="hub">
            <AiFillHome className="hub-icon" onClick={handleOnClick} />
        </div>
    )
}

export default Hub