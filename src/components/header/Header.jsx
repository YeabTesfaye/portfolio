import CTA from './CTA'
import HeaderSocials from './HeaderSocilas.jsx';
import './header.css'
import me from '/assets/me.JPG'; // Notice the leading slash
function Header() {
    return (<header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Yeabsera T.</h1>
            <div className="text-light">Full Stack Developer</div>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={me} alt="Yeab" />
            </div>
            <a href="#contact" className='scroll__down'>
                Scroll Down
            </a>
        </div>
    </header>)
}

export default Header