import "./Rent.css"

function RentData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div> 
            <h4>{props.heading}</h4>
            <p>{props.price}</p>
            <p>{props.text}</p>
            <button><a href="/payment">Buy</a></button>
            

        </div> 
    )
}

export default RentData; 