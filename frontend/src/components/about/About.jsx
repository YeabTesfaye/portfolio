import './about.css'
import {LiaAwardSolid} from 'react-icons/lia'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import me from '/assets/me-about.JPG'
function About(){
    return(<section id='about'> 
       <h5>Get To Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={me} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
                <article className='about_card'>
                    <LiaAwardSolid className='about__icon' />
                    <h5>Experience</h5>
                    <small>8+ months working</small>
                </article>
                <article className='about_card'>
                    <FaUsers className='about__icon' />
                    <h5>Clients</h5>
                    <small>5+ worldwide</small>
                </article>
                <article className='about_card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5>Projects</h5>
                    <small>8+  completed</small>
                </article>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor architecto saepe
                veritatis distinctio necessitatibus accusamus eius? Deleniti, veritatis odit?
                Debitis? Lorem ipsum dolor sit amet.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
       </div>
    </section>)
}


export default About