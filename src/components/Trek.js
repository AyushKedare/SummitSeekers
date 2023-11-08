import "./Trek.css"
import TrekData from "./TrekData"
import Trip1 from "../img/1.png"
import Trip2 from "../img/2.png"
import Trip3 from "../img/3.png"
import Trip4 from "../img/4.png"
import Trip5 from "../img/5.png"
import Trip6 from "../img/6.png"

function Trek(){
    return(
        <div className="trip">

           <h1>Moderate Difficulty</h1>
            <div className="tripcard">
                <TrekData
                image={Trip1} 
                heading="Kalsubai Trek"
                    Location="Location: Bari village in Ahmednagar district "
                    Difficulty="Difficulty: Moderate"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 01/01/2024 to 03/01/2024"
                    Price="Rs.1000"
                />

                <TrekData 
                image={Trip2}
                heading="Harishchandragad Trek"
                    Location="Location: Ahmednagar district situated in the Malshej Ghat"
                    Difficulty="Difficulty: Moderate"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 05/01/2024 to 07/01/2024"
                    Price="Rs.1000"
                />
            </div>


            <h1>Low Difficulty</h1>
            <div className="tripcard">
            <TrekData
                image={Trip5} 
                heading="Takmak Fort Trek"
                    Location="Location: Palghar taluka of Palghar district"
                    Difficulty="Difficulty: Low"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 5/12/2023 to 08/12/2023"
                    Price="Rs.1000"
                />

                <TrekData
                image={Trip6}
                heading="Torna Fort Trek"
                    Location="Location: Velhe taluka of Pune"
                    Difficulty="Difficulty: Low"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 15/01/2024 to 16/01/2024"
                    Price="Rs.1000"
                />
            </div>


            <h1>High Difficulty</h1>
            <div className="tripcard">
            <TrekData 
                image={Trip3}
                heading="Ratangad Fort Trek"
                    Location="Location: Bhandardara in Ahmednagar district"
                    Difficulty="Difficulty: High"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 01/02/2024 to 02/02/2024"
                    Price="Rs.1000"
                />

                <TrekData
                image={Trip4}
                heading="Sondai Fort Trek"
                    Location="Location:  Raigad district of Maharashtra"
                    Difficulty="Difficulty: High"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 05/03/2024 to 08/03/2024"
                    Price="Rs.1000"
                />
            </div>



            
            <h1>All Treks</h1>
            <div className="tripcard">
                <TrekData
                image={Trip1} 
                heading="Kalsubai Trek"
                    Location="Location: Mountain D"
                    Difficulty="Difficulty: Moderate"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 01/01/2024 to 03/01/2024"
                    Price="Rs.1000"
                />

                <TrekData 
                image={Trip2}
                heading="Harishchandragad Trek"
                    Location="Location: Mountain D"
                    Difficulty="Difficulty: Moderate"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 05/01/2024 to 07/01/2024"
                    Price="Rs.1000"
                />

                <TrekData  
                image={Trip3}
                heading="Ratangad Fort Trek"
                    Location="Location: Bhandardara in Ahmednagar district"
                    Difficulty="Difficulty: High"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 01/02/2024 to 02/02/2024"
                    Price="Rs.1000"
                />

                <TrekData
                image={Trip4}
                heading="Sondai Fort Trek"
                    Location="Location:  Raigad district of Maharashtra"
                    Difficulty="Difficulty: High"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 05/03/2024 to 08/03/2024"
                    Price="Rs.1000"
                />

                <TrekData
                image={Trip5}
                heading="Takmak Fort Trek"
                    Location="Location: Palghar taluka of Palghar district"
                    Difficulty="Difficulty: Low"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 5/12/2023 to 08/12/2023"
                    Price="Rs.1000"
                />

                <TrekData
                image={Trip6}
                heading="Torna Fort Trek"
                    Location="Location: Velhe taluka of Pune"
                    Difficulty="Difficulty: Low"
                    AgeGroup="AgeGroup: 20-45"
                    Facilities="FacilitiesForDisabledAgedPeople: NA"
                    Dates="Dates: 15/01/2024 to 16/01/2024"
                    Price="Rs.1000"
                />
            </div>
        </div>
    )
}

export default Trek;