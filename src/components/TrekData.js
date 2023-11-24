import "./Trek.css"

function TrekData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.Location}</p> 
            <p>{props.Difficulty}</p>
            <p>{props.AgeGroup}</p>
            <p>{props.Facilities}</p>
            <p>{props.Dates}</p>
            <p>{props.Price}</p>
            <button><a href="/payment">Book Seats</a></button>
        </div>
    )
}

export default TrekData; 