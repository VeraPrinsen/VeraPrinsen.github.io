import "../stylesheets/ApplicationCard.css"
import Card from "../../objects/components/Card";
import { useNavigate } from "react-router-dom";

const ApplicationCard = ({title, path}) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(path)
    }

    return (
        <Card className="application-card" onClick={handleOnClick}>
            <div className="application-card-content">
                <div className="application-card-title">{title}</div>
            </div>
        </Card>
    )
}

export default ApplicationCard