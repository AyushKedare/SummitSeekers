import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Rent from "../components/Rent";
import RentImg from "../img/rent.png"

function RentGear (){
    return(
        <>
         <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={RentImg}
            title="Rent Gear"
            btnClass=""
            />
            <Rent/>
            <Footer/>
        </>
    );
}

export default RentGear;