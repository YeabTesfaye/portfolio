import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services(){
    return(<section id='services'>
        <h5>What I Offer</h5>
        <h2>Service</h2>
        <div className='container service__container'>
        <article className='service'>
  <div className="service__head">
    <h3>Single Page Applications</h3>
  </div>
  <ul className="service__list">
    <li>
      <BiCheck className='service__list-icon' />
      <p>Build interactive web apps with modern frontend tech.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Create smooth user experiences with React.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Implement routing for seamless navigation.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Integrate APIs for real-time data.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Ensure responsive design and performance.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Optimize user interfaces for various devices.</p>
    </li>
  </ul>
</article>

              
             
<article className='service'>
  <div className="service__head">
    <h3>Web Development</h3>
  </div>
  <ul className="service__list">
    <li>
      <BiCheck className='service__list-icon' />
      <p>Develop robust backend systems .</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Design and implement APIs to connect different parts of your application.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Create captivating user interfaces using  frontend technologies.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Bridge the gap between backend logic and user-facing interfaces.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Craft responsive websites that adapt various devices.</p>
    </li>
  </ul>
</article>


<article className='service'>
  <div className="service__head">
    <h3>Database Design and Implementation</h3>
  </div>
  <ul className="service__list">
    <li>
      <BiCheck className='service__list-icon' />
      <p>Architect efficient database structure.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Choose appropriate database systems.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Optimize database performance.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Implement CRUD operations .</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Ensure data integrity and security .</p>
    </li>
    <li>
      <BiCheck className='service__list-icon' />
      <p>Collaborate with backend teams .</p>
    </li>
  </ul>
</article>

        </div>
    </section>)
}

export default Services