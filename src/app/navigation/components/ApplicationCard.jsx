import "../stylesheets/ApplicationCard.css"
import Card from "../../objects/components/Card";

const ApplicationCard = ({title, path}) => {
    return (
        <Card className="application-card" path={path}>
            <div className="application-card-content">
                <div className="application-card-title">{title}</div>
            </div>
        </Card>
    )
}

export default ApplicationCard