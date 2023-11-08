import "./Rent.css"
import RentData from "./RentData"
import Trip1 from "../img/s1.png"
import Trip2 from "../img/s2.png"
import Trip3 from "../img/b1.png" 
import Trip4 from "../img/b2.png" 
import Trip5 from "../img/t1.png" 
import Trip6 from "../img/t2.png" 
import Trip7 from "../img/c1.png"
import Trip8 from "../img/c2.png"
import Trip9 from "../img/c3.png"

function Rent(){
    return(
        <div className="trip">
            <div className="tripcard">
                <RentData
                image={Trip1}
                heading="Men's MATRYX Waterproof Trekking Shoes VIBRAM MT500"
                price="Rs.13,999"
                text="Rating: 3.8/5"
                />

                <RentData
                image={Trip2}
                heading="Women Leather Boots Waterproof MT500 Beige"
                price="Rs.11,999"
                text="Rating: 4.5/5"
                />

                <RentData
                image={Trip3}
                heading="Travel Backpack 60 Liters TRAVEL 100 - Camel"
                price="Rs.2,499"
                text="Rating: 4.6/5"
                />

                <RentData
                image={Trip4}
                heading="Men's Trekking 50+10 L Backpack MT500"
                price="Rs.6,999"
                text="Rating: 4.5/5"
                />

                <RentData
                image={Trip5}
                heading="Camping Tent 2 Seconds - 2-Person"
                price="Rs.4,999"
                text="Rating: 4.5/5"
                />

                <RentData
                image={Trip6}
                heading="Trekking dome tent - 2-person - MT500"
                price="Rs.7,999"
                text="Rating: 4.2/5"
                />

                <RentData
                image={Trip7}
                heading="Men's Hiking Lightweight Waterproof Jacket MH150"
                price="Rs.3,499"
                text="Rating: 4.4/5"
                />

                <RentData
                image={Trip8}
                heading="Men’s Waterproof Hiking Jacket NH150 Imper"
                price="Rs.1,799"
                text="Rating: 4.3/5"
                />

                <RentData
                image={Trip9}
                heading="Women's Long Waterproof Hiking Jacket - Raincut Long"
                price="Rs.1,999"
                text="Rating: 4.6/5"
                />
            </div>
        </div>
    )
}

export default Rent;