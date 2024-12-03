import React from 'react';
import video from '../assets/video.mp4';


const Hero1 = () => {
  return (
    <div>
      <div className="h-auto w-full " >
        <video autoPlay loop muted className='h-[90vh] w-[100vw] object-cover relative opacity-95' >
          <source src={video} type="video/mp4" />
          
        </video>
        <div className='absolute top-[200px] flex flex-col items-center justify-center w-full  '>
          
          <h2 className='text-white font-bold text-2xl mb-10 '>WORK HARDER, GET STONGER</h2>
          <h1 className='text-white font-extrabold text-5xl '>EASY WITH OUR <span className='text-orange-500'>Gym</span></h1>
        </div>
      </div>
    </div>
  );
}

export default Hero1;