import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../img/contact.png"

function Contact (){
    return(
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={ContactImg}
            title="Contact Us"
            btnClass="hide"
            />
            <ContactForm/>
            <Footer/>

        </>
    )
}

export default Contact;