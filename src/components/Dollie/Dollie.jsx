// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../CustomHook/useFetch";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./dollie.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/channel/playlists/',
//   params: {
//     id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b2839a24a6msh4f07be37487e920p163410jsn2698962370a6',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

export default function Dollie() {
    // const {data, error, fetchData} = useFetch();
    

    // fetchData(options);
  return (
    <>
      <Swiper
        slidesPerView={5}spaceBetween={10}
        loop={true} pagination={{clickable: true,}}
        navigation={true}modules={[Pagination, Navigation]}
        className="mySwiper">
           <SwiperSlide className="my-slide">Slide 1</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 2</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 3</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 4</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 5</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 6</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 7</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 8</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
           <SwiperSlide className="my-slide">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
