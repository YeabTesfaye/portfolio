import {BsPatchCheckFill} from 'react-icons/bs'
import './experieance.css'
import { frontendSkills, backendSkills } from './skills'

function Experieance(){

    return (<section id='experience'>
         <h5>What Skills I have</h5>
         <h2>My Experience</h2>
         <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    {frontendSkills.map((skill, index) => (
                        <article className='experience__details' key={index}>
                            <BsPatchCheckFill className='experience__details-icon' />
                           <div>
                           <h4>{skill.skill}</h4>
                            <small className='text-light'>{skill.experience}</small>
                           </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="experience__backend">
                <h3>Backend Development</h3>
                 <div className="experience__content">
                    {backendSkills.map((skill, index) => (
                        <article className='experience__details' key={index}>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                            <h4>{skill.skill}</h4>
                            <small className="text-light">{skill.experience}</small>
                            </div>
                        </article>
                    ))}
                 </div>
            </div>
        </div>
    </section>)
}

export default Experieance