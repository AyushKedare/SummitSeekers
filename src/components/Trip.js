import "./Trip.css"
import TripData from "./TripData"
import Trip1 from "../img/1.png"
import Trip2 from "../img/2.png"
import Trip3 from "../img/3.png" 

function Trip(){
    return(
        <div className="trip">
            <h1>Popular Treks</h1>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Kalsubai Trek"
                text="Kalsubai Peak is a very popular trek in the Sahyadri region. It is the highest peak in Maharashtra at 5,400 ft and is easily accessible both from Mumbai and Pune. The trek offers a breathtaking combination of natural environments like waterfalls, forests, grasslands, and historic forts. 

                The Kalsubai Temple at the summit of the peak draws people from the nearby villages throughout the year. They come to take blessings from Kalsubai Devi."
                />

                <TripData
                image={Trip2}
                heading="Harishchandragad Trek"
                text="Harishchandragad trek is one of the most challenging treks in the western ghats of Maharashtra. A popular trek which offers a variety of adventures to all kinds of trekkers.

                It is a hill fort in the Ahmednagar district situated in the Malshej Ghat. It climbs up to an altitude of 4,670 ft. 
                
                Harishchandragad is an ancient fort. Its origin is said to have been in the 6th century during the rule of the Kalchuri dynasty. But the caves which you see on the top are probably carved out in the 11th century. "
                />

                <TripData
                image={Trip3}
                heading="Ratangad Fort Trek"
                text="Ratangad fort is a part of the Kalsubai range, which consists of some of the highest peaks in the Sahyadris. Ratangad gives you the best views of surrounding peaks and Bhanadardara dam. Experience the colossal cliffs unfolding in front of your eyes, one behind the other as you walk on the edge of the fort.

                The robustness of Sahyadris can be experienced only from a few forts and Ratangad is one of them. Standing in the “Eye of the Needle” is a major attraction."
                />
            </div>
        </div>
    )
}

export default Trip;