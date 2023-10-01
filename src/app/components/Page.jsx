const Page = ({title, setPage, content}) => {
    const onClickListener = () => {
        setPage("menu")
    }

    return (
        <div>
            <h1>{title}</h1>
            <input type="button" value="Go to menu" onClick={onClickListener}/>
            {content}
        </div>
    )
}

export default Page