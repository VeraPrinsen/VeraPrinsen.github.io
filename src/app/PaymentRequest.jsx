import "./stylesheets/PaymentRequest.css"
import logo from "./pluumke-logo.jpeg"

const PaymentRequest = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="main">
            <div className="logo">
                <img src={logo} />
            </div>
            <button className="button" onClick={() => openInNewTab("https://betaalverzoek.rabobank.nl/betaalverzoek/?id=nhbnMrYkQMKje6uc1xwHaQ")}>Betaal gripje(s)</button>
        </div>
    )
}

export default PaymentRequest