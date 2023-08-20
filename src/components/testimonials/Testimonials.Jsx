import './testimonials.css';
import { testimonials } from './data';
// import {Pagination} from 'swiper'
import { Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      modules={[ Pagination, Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
  
    
      className="container testimonials__container">
        {testimonials.map(({ id, avatar, name, review }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
