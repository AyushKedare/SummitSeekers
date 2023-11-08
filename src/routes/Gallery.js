import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GalleryImg from "../img/gallery.png" 
import TrekGallery from "../components/TrekGallery";
import Footer from "../components/Footer";

function Treks (){
    return( 
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={GalleryImg}
            title="Gallery"
            btnClass="hide"
            />
            <TrekGallery/>
            <Footer/>

        </>
    )
}

export default Treks;