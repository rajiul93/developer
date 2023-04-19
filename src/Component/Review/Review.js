import React from 'react';
import "./Review.css";
// Import Swiper React components
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function Review() {
  return (
    <div className='review my-5 '>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>I am very satisfied with the quality of the work and good attitude . It was very pleasant to work with and amazing results...</p>
          </div>
          <div><p> ovallo <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Work on my webshop with products from my supliers. Did nice work.</p>
          </div>
          <div><p> thomasdalby1987 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>   

        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div>
            <p>Another great work! Thanks to Juwelr for his attentive and professional service. A pleasure to work with. Always prompt and even made a video for me so I know how to do the SEO optimisation myself.</p>
          </div>
          <div><p> damia30 <br />Fiverr</p></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Review