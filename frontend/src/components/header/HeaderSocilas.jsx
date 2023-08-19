import { BiLogoTelegram } from 'react-icons/bi';
import {AiFillLinkedin} from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/yeabsra-tesfaye-815ba0261/" target="_blank" > <AiFillLinkedin/> </a>
            <a href="https://github.com/YeabTesfaye" target="_blank"><BsGithub /></a>
            <a href="https://t.me/here_is_yeab" target="_blank" ><BiLogoTelegram /></a>
        </div>
    )
}

export default HeaderSocials