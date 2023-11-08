import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../img/about.png"
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
         <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="About Us"
            btnClass=""
            />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default About;