import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoTelegram} from 'react-icons/bi'
function Footer(){
    return(<footer>
         <a href="#" className='footer__logo'>Yeab T.</a>
         <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

         <div className="footer__socials">
         <a href='https://www.linkedin.com/in/yeabsra-tesfaye-815ba0261'><AiFillLinkedin /></a>
         <a href="https://www.instagram.com/hereisyeab"  target='_blank'><AiFillInstagram /></a>
         <a href="https://t.me/here_is_yeab"  target='_blank'><BiLogoTelegram /></a>

         </div>
         <div className="footer__copyright">
         <small>&copy; Yeab All rights reserved. {new Date().getFullYear()}</small>
         </div>
    </footer>)
}

export default Footer