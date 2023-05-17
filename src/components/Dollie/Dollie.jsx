import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./dollie.css";

import { Pagination, Navigation } from "swiper";
import useFetchHook from "../FetchHook/useFetchHook";

import "swiper/css";
import "swiper/css/navigation";
import { MyContext } from "../Context/UseContext";
import { useContext } from "react";
const options = {
  method: 'GET',
  url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
  params: {
    id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
  },
  headers: {
    // 'X-RapidAPI-Key': '855d5d8df8mshc77cd35022f584fp1b569bjsn0fd0c1d52fcd',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};


export default function Dollie() {
 const {data, error, loading} = useFetchHook(options);
 const {dark , searchText} = useContext(MyContext);
  return (
    <>
      <Swiper
        // slidesPerView={4}
        breakpoints={
          {
            576: {
              slidesPerView:1
            },
            768:{
              slidesPerView:3
            },
            992: {
              slidesPerView:4
            }
          }
        }
        spaceBetween={10}
        loop={false}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.filter((video) => {
          if(video.title.toLowerCase().includes(searchText.toLowerCase())) return video;
          return video;
        }).slice(20,35).map((video, index) => (
          <SwiperSlide key={index} className="my-slide">
            <div className="mySlider video w-[250px]  mx-3 relative">
              <Link  to={`/playlist/video/${video.videoId}/${video.title}/${video.videoInfo}`}><img src={video.thumbnail[0].url} alt={video.videoOwnerChannelTitle} className="video__img w-full h-[90px] "/></Link>
              <h5 className={`text-left font-extrabold ${dark?'light':'dark'}`}>{video.channelTitle}</h5>
              <div className="video__info-wrapper flex justify-between text-xs font-medium  ">
                <span className={dark? 'light':'dark'}>{video.videoInfo}</span>
                <span className={dark? 'light':'dark'}>Dollie Blair</span>
              </div>
              <span className="video__length absolute top-[115px] font-bold right-[10px] light">{video.lengthText}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
