const Menu = ({setPage}) => {
    const onClickListener = () => {
        setPage("page")
    }

    return (
        <div>
            <h1>Menu</h1>
            <input type="button" value="Go to page" onClick={onClickListener}/>
        </div>
    )
}

export default Menu