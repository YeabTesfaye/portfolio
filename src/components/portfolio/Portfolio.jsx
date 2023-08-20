import React from 'react'; // Don't forget to import React
import './portfolio.css';
import portfolioworks from './portfolio';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioworks.map(({ id, image, title, github, demo }) => (
          <article className='portfolio__item' key={id}>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
