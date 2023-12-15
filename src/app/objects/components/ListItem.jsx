import '../stylesheets/List.scss'

const ListItem = ({ item }) => {
    let title = item.title ? item.title : 'Title'
    let description = item.description ? item.description : ''
    let thumbnail = item.thumbnail ? item.thumbnail : null
    let action = item.action ? item.action : null

    return (
        <div className="list-item">
            {thumbnail && <div className="li-icon"><img className="li-icon-img" src={thumbnail} /></div>}
            <div className="li-content">
                <div className="li-content-title">{title}</div>
                {description && <div className="li-content-description">{description}</div>}
            </div>
            <div className="li-action">
                {action}
            </div>
        </div>
    )
}

export default ListItem