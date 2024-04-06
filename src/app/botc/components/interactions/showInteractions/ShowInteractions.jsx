const ShowInteractions = ({ interactions }) => {
    return (
        <div className="show-interactions-main">
            <div className="show-interactions">
                {interactions.map(interaction => <div>{interaction}</div>)}
            </div>
        </div>
    )
}

export default ShowInteractions