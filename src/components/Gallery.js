import "./Gallery.css"
import GalleryData from "./GalleryData"
import Trip1 from "../img/tpic.png"
import Trip2 from "../img/tvid.png"

function Gallery(){
    return(
        <div className="trip">
            <h1>Gallery</h1> 
            <div className="tripcard">
                <GalleryData
                image={Trip1}
                heading="Photos"
                />

                <GalleryData
                image={Trip2}
                heading="Videos"
                />

                
            </div>
        </div>
    )
}

export default Gallery;