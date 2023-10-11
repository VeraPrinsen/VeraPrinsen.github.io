// items must be a list of elements to show
// - title
// - description
// - thumbnail
// - image
// - actions
import ListItem from "./ListItem";

const List = ({ items }) => {
    return (
        <div className="list">
            {items.map(item => <ListItem key={item.id} item={item} />)}
        </div>
    )
}

export default List