import "../stylesheets/List.scss"

const ListItem = ({ item }) => {
    let title = item.title ? item.title : "Title"
    let description = item.description ? item.description : ""
    let thumbnail = item.thumbnail ? item.thumbnail : null
    let image = item.image ? item.image : null
    let action = item.action ? item.action : null

    return (
        <div className="list-item">
            <div className="li-icon">
                {thumbnail && <img className="li-icon-img" src={thumbnail} />}
            </div>
            <div className="li-content">
                <div className="li-content-title">{title}</div>
                <div className="li-content-description">{description}</div>
            </div>
            <div className="li-action">
                {action}
            </div>
        </div>
    )
}

export default ListItem