import "./Payment.css"

function Payment(){
    return(
        <div className="form-container">
            <h1>Make your payment</h1>
            <form>
                <input placeholder="Name on Card"/>
                <input placeholder="Card Number"/>
                <input placeholder="Expiration Date"/>
                <input placeholder="CVV"/>
                <button>Submit Payment</button>
            </form>
        </div>
    )
}

export default Payment;