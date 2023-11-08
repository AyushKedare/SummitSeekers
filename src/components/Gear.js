import "./Gear.css"
import GearData from "./GearData"
import Trip1 from "../img/shoes.png"
import Trip2 from "../img/bags.png"
import Trip3 from "../img/tents.png" 

function Gear(){
    return(
        <div className="trip">
            <h1>Gear</h1>
            <div className="tripcard">
                <GearData
                image={Trip1}
                heading="Shoes"
                />

                <GearData
                image={Trip2}
                heading="Bags"
                />

                <GearData
                image={Trip3}
                heading="Tents"
                />
            </div>
        </div>
    )
}

export default Gear;