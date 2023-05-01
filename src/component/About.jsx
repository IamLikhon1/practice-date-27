import React from 'react';
import  { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
    return (
        <div className='mx-20 mt-10'>
            <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><div className="card h-96 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></SwiperSlide>
         
          <SwiperSlide><div className="card w-96 h-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></SwiperSlide>
         
          <SwiperSlide><div className="card h-96 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></SwiperSlide>
          <SwiperSlide><div className="card h-96 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></SwiperSlide>
         
         
        </Swiper>
        </div>
      );
    };

export default About;