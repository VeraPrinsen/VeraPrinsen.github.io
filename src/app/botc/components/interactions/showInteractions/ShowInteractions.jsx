const ShowInteractions = ({ interactions }) => {
    return (
        <div className="show-interactions-main">
            <div className="show-interactions">
                <ul>
                    {interactions.map(interaction => <li className="interaction">{interaction}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ShowInteractions