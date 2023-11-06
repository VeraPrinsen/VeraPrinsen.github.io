import "../stylesheets/Card.css"
import {Link} from "react-router-dom";

const Card = ({ children, className, path }) => {
    let classes = className + " card"
    return (
        <Link to={path}>
            <div className={classes}>
                {children}
            </div>
        </Link>
    )
}

export default Card