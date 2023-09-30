import {Card} from "antd";

const ApplicationCard = ({title, setPage}) => {
    const onClick = () => {
        setPage(title)
    }

    return (
        <Card
            className="application-card"
            onClick={onClick}
            title={title}
        >
            Content
        </Card>
    )
}

export default ApplicationCard