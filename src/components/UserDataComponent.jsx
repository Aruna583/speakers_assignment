import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import CrossImage from '../../public/assets/crossImg.png';
import LinkeDin from '../../public/assets/linkedin.png';
import DropImg from '../../public/assets/dropImg.png';



const UserDataComponent = (props) => {
    const {onClose, speakerData} = props
    const {name, img, role, company} = speakerData


  return (
    <div className='relative p-4 shadow-lg m-4 flex justify-center items-center'>
        <div className='absolute top-0 right-0 p-2 inline-block cursor-pointer'>
            <RiCloseLine border='1.5px solid #323232' onClick={onClose}/>
        </div>
        <div className='md:flex flex  flex-col md:flex-row p-4 gap-4 pb-4'>
            <div className='w-full md:w-1/3 md:flex flex-col md:flex-row justify-center items-center gap-4 md:border-r border-gray-300'>
                <img src={img} alt='' className='h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-full'/>
                <div className='border-right border-solid'>
                    <p className='lg:text-2xl md:text-xl text-lg font-bold'>{name}</p>
                    <p className='md:text-lg text-base font-semibold'>{role}</p>
                    <p className='text-gray-400 md:text-base sm:text-sm'>{company}</p>
                    <div className='flex gap-2 pt-2'>
                    <img src={DropImg} className='pointer h-5' />
                    <img src={CrossImage} className='pointer h-5' />
                    <img src={LinkeDin} className='pointer h-5'/>
                    </div>
                </div>
            </div>
            <div className='md:w-[732px] flex justify-center items-center font-serif text-sm md:text-base' >
                <span>Monotonectally synergize business communities rather than client-centric convergence. 
                    Assertively unleash cross-platform best practices rather than pandemic total linkage. 
                    Synergistically monetize parallel infomediaries whereas 2.0 mindshare. 
                    Dramatically pursue real-time markets through e-business strategic theme areas.
                </span>
            </div>
        </div>
    </div>
  )
}

export default UserDataComponent