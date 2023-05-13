import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./dollie.css";

import axios from "axios";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const options = {
  method: "GET",
  url: "https://youtube-v3-alternative.p.rapidapi.com/playlist",
  params: {
    id: "PLMC9KNkIncKseYxDN2niH6glGRWKsLtde",
  },
  headers: {
    // 'X-RapidAPI-Key': 'b2839a24a6msh4f07be37487e920p163410jsn2698962370a6',
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export default function Dollie() {
  const [data, setData] = useState([]);
  const bringData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  bringData();
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.slice(1,15).map((video, index) => (
          <SwiperSlide key={index} className="my-slide">
            <div className="video w-[250px] border-2 border-solid border-stone-950 mx-3 relative">
              <Link target="_blank" to={`/playlist/video/${video.videoId}`}><img src={video.thumbnail[1]} alt={video.videoOwnerChannelTitle} className="video__img w-full h-[90px] border-2 border-solid border-[red] "  /></Link>
              <h5 className="text-left font-extrabold">{video.channelTitle}</h5>
              <div className="video__info-wrapper flex justify-between text-xs font-medium  ">
                <span>{video.videoInfo}</span>
                <span>Dollie Blair</span>
              </div>
              <span className="video__length absolute top-[90px] right-[10px]">{video.lengthText}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
