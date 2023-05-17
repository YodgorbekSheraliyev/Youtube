import './recommended.css';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import useFetchHook from "../FetchHook/useFetchHook";
import { Link } from "react-router-dom";
import { MyContext } from '../Context/UseContext';
import { useContext } from 'react';

const options = {
  method: 'GET',
  url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
  params: {
    id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
  },
  headers: {
    'X-RapidAPI-Key': '855d5d8df8mshc77cd35022f584fp1b569bjsn0fd0c1d52fcd',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export default function Recommended() {
  const {dark} = useContext(MyContext)
   const {data} =  useFetchHook(options)
  return (
    <div className="flex justify-between flex-wrap gap-y-[20px] ">
        {data.slice(35,55).map((video, index) => (
            <div key={index} className="recommended video w-[310px] h-[210px]  mx-3 relative">
             <Link to={`/playlist/video/${video.videoId}/${video.title}/${video.videoInfo}`}> <img src={video.thumbnail[1].url} alt={video.videoOwnerChannelTitle} className="video__img w-full h-[170px]  "  /></Link>
              <h5 className={`text-left font-extrabold ${dark? 'light':'dark'}`}>{video.channelTitle}</h5>
              <div className={`video__info-wrapper flex justify-between text-xs font-medium ${dark ? 'light':'dark'} `}>
                <span className={dark ? 'light':'dark'}>{video.videoInfo}</span>
                <span className={dark ? 'light':'dark'}>{video.publishedText}</span>
              </div>
              <span className={`video__length absolute top-[120px] right-[10px] ${dark? "light":"dark"}`}>{video.lengthText}</span>
            </div>
        ))}
    </div>
  );
}
