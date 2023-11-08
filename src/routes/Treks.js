import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TrekImg from "../img/trek.png" 
import Trek from "../components/Trek";
import Footer from "../components/Footer";

function Treks (){
    return(
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={TrekImg}
            title="Choose your favourite"
            btnClass="hide"
            />
            <Trek/>
            <Footer/>

        </>
    )
}

export default Treks;