import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Gear from "../components/Gear";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import HeroImg from "../img/HomeHero.png"

function Home (){
    return(  
        <>
           <Navbar />
            <Hero
            cName="hero"
            heroImg={HeroImg}
            title="Your Journey Your Story"
            text="Choose your favourite trek"
            buttonText="Trek Plans"
            url="/treks"
            btnClass="show"
            />
            <Trip/>
            <Gear/>
            <Gallery/>
            <Footer/>
        </>

         
    ) 
}

export default Home;