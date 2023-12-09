import '../stylesheets/Card.css'

const Card = ({ children, className, onClick }) => {
    let classes = className + ' card'
    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card