const Page = ({setPage}) => {
    const onClickListener = () => {
        setPage("menu")
    }

    return (
        <div>
            <h1>Page</h1>
            <input type="button" value="Go to menu" onClick={onClickListener}/>
        </div>
    )
}

export default Page