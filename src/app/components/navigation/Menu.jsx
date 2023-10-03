import ApplicationCard from "./ApplicationCard";

const Menu = ({pages, setPage}) => {
    return (
        <div className="menu">
            {pages.map(p =>
                <div className="menu-item">
                    <ApplicationCard
                        title={p}
                        setPage={setPage}
                    />
                </div>
            )}
        </div>
    )
}

export default Menu