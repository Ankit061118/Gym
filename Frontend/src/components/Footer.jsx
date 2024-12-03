import React from 'react'
import { FaDumbbell } from 'react-icons/fa6'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="mt-10 mb-10 flex flex-col gap-5  items-center">

     <h1 className='text-orange-500 font-semibold text-4xl'><span className='text-white'>Gym</span> Rats <FaDumbbell className='mt-[-30px] ml-[160px] rotate-45 h-[30px]'/></h1>

     <div className='flex gap-5 mb-5'>
     <FaFacebook className='text-gray-500 cursor-pointer w-[30px] h-[50px]'/>
     <FaInstagram className='text-gray-500 cursor-pointer w-[30px] h-[50px]'/>
     <FaTwitter className='text-gray-500 cursor-pointer w-[30px] h-[50px]'/>
     </div>
     <hr className='w-full border-[0.5px] border-gray-500 '/>

     <h2 className='text-gray-500 mb-1'>All right reserved &copy; 2020  </h2>

    
        
      </div>
      
    </div>
  )
}

export default Footer
