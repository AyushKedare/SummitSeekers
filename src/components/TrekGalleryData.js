import "./TrekGallery.css"

function TrekGalleryData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div> 
            <h4>{props.heading}</h4>
        </div>
    )
}

export default TrekGalleryData; 