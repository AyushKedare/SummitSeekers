import "./TrekGallery.css"
import TrekGalleryData from "./TrekGalleryData"
import Trip1 from "../img/k1.png"
import Trip2 from "../img/k2.png"
import Trip3 from "../img/k3.png"
import Trip4 from "../img/h1.png"
import Trip5 from "../img/h2.png"
import Trip6 from "../img/h3.png"
import Trip7 from "../img/r1.png"
import Trip8 from "../img/r2.png"
import Trip9 from "../img/r3.png"
import Trip10 from "../img/so1.png"
import Trip11 from "../img/so2.png"
import Trip12 from "../img/so3.png"
import Trip13 from "../img/ta1.png"
import Trip14 from "../img/ta2.png"
import Trip15 from "../img/ta3.png"
import Trip16 from "../img/to1.png"
import Trip17 from "../img/to2.png"
import Trip18 from "../img/to3.png"


function TrekGallery(){
    return(
        <div className="trip">
            <h1>Kalsubai Trek</h1>             
            <div className="tripcard">
                <TrekGalleryData
                image={Trip1}
                />

                <TrekGalleryData
                image={Trip2}
                /> 

                <TrekGalleryData
                image={Trip3}
                />               
            </div>

            <h1>Harishchandragad Trek</h1> 
            <div className="tripcard">
                <TrekGalleryData
                image={Trip4}
                />

                <TrekGalleryData
                image={Trip5}
                /> 

                <TrekGalleryData
                image={Trip6}
                />               
            </div>

            <h1>Ratangad Fort Trek</h1> 
            <div className="tripcard">
                <TrekGalleryData
                image={Trip7}
                />

                <TrekGalleryData
                image={Trip8}
                /> 

                <TrekGalleryData
                image={Trip9}
                />               
            </div>

            <h1>Sondai Fort Trek</h1> 
            <div className="tripcard">
                <TrekGalleryData
                image={Trip10}
                />

                <TrekGalleryData
                image={Trip11}
                /> 

                <TrekGalleryData
                image={Trip12}
                />               
            </div>

            <h1>Takmak Fort Trek</h1> 
            <div className="tripcard">
                <TrekGalleryData
                image={Trip13}
                />

                <TrekGalleryData
                image={Trip14}
                /> 

                <TrekGalleryData
                image={Trip15}
                />               
            </div>

            <h1>Torna Fort Trek</h1> 
            <div className="tripcard">
                <TrekGalleryData
                image={Trip16}
                />

                <TrekGalleryData
                image={Trip17}
                /> 

                <TrekGalleryData
                image={Trip18}
                />               
            </div>
        </div>
    )
}

export default TrekGallery;