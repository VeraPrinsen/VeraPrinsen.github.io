import "./PaymentRequest.scss"
import logo from './pluumke-logo.jpeg'

const PaymentRequest = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="main">
            <img src={logo} />
            <p className="text">
                Gripjes voor €1,- per stuk. <br/>
                Bedrag in betaalverzoek kan aangepast worden.
            </p>
            <button className="button" onClick={() => openInNewTab("https://betaalverzoek.rabobank.nl/betaalverzoek/?id=qXu1ATdnSIWx8biG4eEeWA")}>Betaal gripje(s)</button>
        </div>
    )
}

export default PaymentRequest