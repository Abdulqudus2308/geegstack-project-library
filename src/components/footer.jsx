import gsLogo from "../assets/images/geegstack-logo-white.png"
import whatsappIcon from "../assets/images/whatsapp-white.png"
import facebookIcon from "../assets/images/facebook-white.png"
import instagramIcon from "../assets/images/instagram-white.png"

const Footer = () => {
    return (
        <footer>
            <img src={gsLogo} alt="Geegstack Academy" />
            <p>&copy; Geegstack Academy of Software Engineering Ltd., {new Date().getFullYear() }.</p>
            <div>
                <a href="https://facebook.com/geegstack.academy">
                    <img src={whatsappIcon} alt="whatsapp" id="whatsapp"/>
                </a>
                <a href="https://instagram.com/geegstackacademy">
                    <img src={facebookIcon} alt="facebook" id="facebook"/>
                </a>
                <a href="https://wa.me/+2348050885112">
                    <img src={instagramIcon} alt="instagram" id="instagram"/>
                </a>
                
                
                
            </div>
        </footer>
    )
}
export default Footer