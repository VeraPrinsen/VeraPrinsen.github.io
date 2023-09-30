const Page = ({title, setPage}) => {
    const onClickListener = () => {
        setPage("menu")
    }

    return (
        <div>
            <h1>{title}</h1>
            <input type="button" value="Go to menu" onClick={onClickListener}/>
        </div>
    )
}

export default Page