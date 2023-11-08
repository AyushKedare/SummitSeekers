import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>SummitSeekers</h1>
                </div>

                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                </div>
            </div>


            <div className="bottom">
                <div>
                    <h4>Address</h4>
                    <h5>11,C-402,Andheri Sports Club,Andher (West), Mumbai-400058</h5>
                    <h4>Phone</h4>
                    <h5>1234567890</h5>
                    <h4>Mail</h4>
                    <h5>abcd@gmail.com</h5>
                </div>


                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/Contact">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;