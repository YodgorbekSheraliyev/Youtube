import React from "react";
import "./video.css";
import { Link, useParams } from "react-router-dom";
import { MyContext } from '../Context/UseContext';
import { useContext } from 'react';
import {BiLike} from 'react-icons/bi';
import {BiDislike} from 'react-icons/bi';
import {TbShare3} from 'react-icons/tb';
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import useFetchHook from "../FetchHook/useFetchHook";


const Video = () => {
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
  const {data } = useFetchHook(options)

  const {dark} = useContext(MyContext);
  if(dark){
    document.getElementById('root').style.backgroundColor = '#494949'
  }else{
    document.getElementById('root').style.backgroundColor = '#fff'
  }
  const { id, title, info } = useParams();
  function addLetter(n) {
    switch (n.length) {
      case 4:
        return n.slice(0, 1) + "K";
        break;
      case 5:
        return n.slice(0, 2) + "K";
        break;
      case 6:
        return n.slice(0, 3) + "K";
        break;
      case 7:
        return n.slice(0, 1) + "M";
        break;
      case 8:
        return n.slice(0, 2) + "M";
        break;
      case 9:
        return n.slice(0, 3) + "M";
        break;
      case 10:
        return n.slice(0, 1) + "B";
        break;
      case 11:
        return n.slice(0, 2) + "B";
        break;
      default:
        return n;
    }
  }
  return (
    <div className="single__video-wrapper flex pt-[90px] px-[20px] justify-between align-start">
      <aside className="single__left ">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className={`single__video-details `}>
          <h4 className={`text-[30px] ${dark? 'light':'dark'}`}>
             {title}
          </h4>
          <div className="flex justify-between">
            <span className={dark? 'light':'dark'}>{info}</span>
            <div>
              <button className={`mx-3 text-[30px] ${dark? 'light':'dark'}`}><BiLike/></button>
              <button className={`mx-3 text-[30px] ${dark? 'light':'dark'}`}><BiDislike/></button>
              <button className={`mx-3 text-[30px] ${dark? 'light':'dark'}`}><TbShare3/></button>
              <button className={`mx-3 text-[30px] ${dark? 'light':'dark'}`}><BiDotsHorizontalRounded/></button>
            </div>
          </div>
        </div>
      </aside>
      <aside className="single__right">
        <h2 className={`font-black text-[34px] mb-[20px] ${dark? 'light':'darks'}`}>Next </h2>
        {data.slice(60, 95).map((video, index) => (
          <Link  key={index} to={`/playlist/video/${video.videoId}/${video.title}/${video.videoInfo}`}>
            <div
              className="box mb-[25px] flex justify-start gap-2 align-start "
             
            >
              <img
                src={video.thumbnail[0].url}
                alt={video.videoOwnerChannelTitle}
                className="video__img w-[220px] h-[110px] rounded-lg"
              />
              <div>
                <h4 className={dark? 'light':'dark'}>{video.channelTitle}</h4>
                <p className={dark? 'light':'dark'}>{video.videoInfo}  </p>

              </div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Video;
