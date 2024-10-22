import React, { useState } from 'react';
import speakersData from '/src/slidersData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserDataComponent from './UserDataComponent';
import { settings } from '../utils';
import ArrowBigRight from '../../assets/rightArrow.png';

const SliderComponent = () => {

  const [speakerData, SetShowSpeaker] = useState(null);

  const handleSpekerDetails =(speaker) =>{
    SetShowSpeaker(speaker)
  }

  const handleClose =() =>{
    SetShowSpeaker(null)
  }


  return (
      <div className='bg-white p-4 flex flex-col'>
        {speakerData && <UserDataComponent speakerData={speakerData} onClose={handleClose}/>}
        <Slider {...settings}>
        {speakersData.map((speaker, index) => (
          <div 
          className='w-[285px] shadow-lg rounded-xl m-4' 
          key={`${index+ speaker.name}`}
          onClick ={() => handleSpekerDetails(speaker)}
          >
            <div className='flex justify-center items-center'>
            <img src={`${speaker.img}`} className='h-44 w-44 rounded-full' />
            </div>
            <div className='flex flex-col justify-center items-center gap-2 p-4'>
            <p className='text-2xl font-bold'>{speaker.name}</p>
            <p className='text-lg'>{speaker.role}</p>
            <p className='text-base text-gray-400'>{speaker.company}</p>
            </div>
          </div>
        ))}
        </Slider>
        <div className='relative flex justify-center items-center mt-4'>
        <div className='w-[8rem] top-[3rem] md:block hidden'>
        <span>click here to see the full program</span>
        <div className='absolute top-[4.5rem] md:left-[17rem] lg:left-[34rem] sm:left-[10rem]'>
        <img src={ArrowBigRight} className='h-8 w-40 pl-10' />
        </div>
        </div>
        
        <button className='w-96 bg-blue-800 text-white h-14 rounded-lg text-center'>
          See the Program
        </button>
        
        </div>
      </div>
  )
}

export default SliderComponent