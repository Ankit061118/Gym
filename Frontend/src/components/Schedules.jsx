import React, { useState } from 'react'
import img from "../assets/schedules.webp"
import trainer1 from '../assets/first-trainer.jpg'
import trainer2 from '../assets/second-trainer.jpg'
import trainer3 from '../assets/third-trainer.jpg'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Schedules = () => {
    const [state,setState]=useState(2)
  return (
    <div className='mt-[200px]' id='schedules'>
         
          <div>
        <img src={img} alt="" className="relative w-full h-[130vh] opacity-45" />
         <h1 className='absolute bottom-[-1950px] ml-[550px] text-white font-bold text-3xl'>Classes <span className='text-orange-500 '>Schedules</span></h1>

        <div className='absolute bottom-[-2050px] flex  justify-center w-full'>
               <ul className='flex gap-4 text-white font-semibold text-xl '>
                <li onClick={()=>setState(1)} className={state===1?"text-orange-500 cursor-pointer":"cursor-pointer"}>Monday</li> /
                <li onClick={()=>setState(2)} className={state===2?"text-orange-500 cursor-pointer":"cursor-pointer"}>Tuesday</li> /
                <li onClick={()=>setState(3)} className={state===3?"text-orange-500 cursor-pointer":"cursor-pointer"}>Wednesday</li> /
                <li onClick={()=>setState(4)} className={state===4?"text-orange-500 cursor-pointer":"cursor-pointer"}>Thrusday</li> /
                <li onClick={()=>setState(5)} className={state===5?"text-orange-500 cursor-pointer":"cursor-pointer"}>Friday</li> /
                <li onClick={()=>setState(6)} className={state===6?"text-orange-500 cursor-pointer":"cursor-pointer"}>Saturday</li> /
               </ul>

               
        </div>
        <div className="classes text-white absolute bottom-[-2600px] ml-[280px]">
                <table className={state==1?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>2:00PM - 3:30PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:30AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:30AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
                <table className={state==2?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>02:00 - 03:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>11:00 - 12:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
                <table className={state==3?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>09:00 - 10:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>02:00 - 03:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
                <table className={state==4?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>12:30 - 01:00 PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>02:00 - 03:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
                <table className={state==5?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>11:00 - 12:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>04:00 - 05:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>02:00 - 03:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
                <table className={state==6?"":"hidden"}>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Fitness Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>William G.Stewart</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Muscle Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>09:00 - 10:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Paul D.Newman</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body Building</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>04:00 - 05:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Body C. Harris</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Yoga Training Class</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>10:00 - 11:00AM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Hector T. Diagle</th>
                  </tr>
                  <tr className=''>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Advanced Training</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>01:00 - 02:00PM</th>
                    <th className='border border-white w-[200px] h-[100px] p-4'></th>
                    <th className='border border-white w-[200px] h-[100px] p-4'>Bret D. Bowers</th>
                  </tr>
                 
                </table>
               </div>

               </div>
               <div className="mt-[180px] flex flex-col items-center">
                <div className="flex flex-col w-[800px] justify-center items-center">
                <h1 className='mb-[40px] text-white font-extrabold text-4xl'>Our <span className='text-orange-500'>Trainers</span></h1>
                <p className='mb-[15px] font-semibold text-2xl text-gray-500'>Our trainers are fully qualified and responsible they will help you to  </p>
                <span className='mb-[50px] font-semibold text-2xl text-gray-500'>achieve your fitness goal</span>
                </div>
               <div className="flex gap-7 w-full  justify-center mb-10 trainers">



<div className="flex flex-col w-[300px] h-auto  gap-2 rounded-md bg-white text-black">

    <img src={trainer1} className='w-[300px] pl-7 pr-7 pt-7 pb-3' alt="" />

    <h2 className="text-orange-500 font-semibold text-md pl-7">Strength Training</h2>
    <h2 className="text-black font-bold text-lg pl-7 ">Bret D. Bowers</h2>
    <p className='pl-7 pr-7 pt-1 pb-3 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime, hic ab</p>
    <div className="flex pl-5 pr-7 pb-7 gap-3  ">
    <FaFacebook className='cursor-pointer w-[40px] h-[30px]'/>
    <FaInstagram className='cursor-pointer w-[40px] h-[30px]'/>
    <FaTwitter className='cursor-pointer w-[40px] h-[30px]'/>
    </div>

</div>
<div className="flex flex-col w-[300px] h-auto  gap-2 rounded-md bg-white text-black">

    <img src={trainer2} className='w-[300px] pl-7 pr-7 pt-7 pb-3' alt="" />

    <h2 className="text-orange-500 font-semibold text-md pl-7">Muscles Training</h2>
    <h2 className="text-black font-bold text-lg pl-7 ">Hector T. Daigl</h2>
    <p className='pl-7 pr-7 pt-1 pb-3 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime, hic ab</p>
    <div className="flex pl-5 pr-7 pb-7 gap-3  ">
    <FaFacebook className='cursor-pointer w-[40px] h-[30px]'/>
    <FaInstagram className='cursor-pointer w-[40px] h-[30px]'/>
    <FaTwitter className='cursor-pointer w-[40px] h-[30px]'/>
    </div>

</div>
<div className="flex flex-col w-[300px] h-auto  gap-2 rounded-md bg-white text-black">

    <img src={trainer3} className='w-[300px] pl-7 pr-7 pt-7 pb-3' alt="" />

    <h2 className="text-orange-500 font-semibold text-md pl-7">Power Training</h2>
    <h2 className="text-black font-bold text-lg pl-7 ">Paul D. Newman</h2>
    <p className='pl-7 pr-7 pt-1 pb-3 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime, hic ab</p>
    <div className="flex pl-5 pr-7 pb-7 gap-3  ">
    <FaFacebook className='cursor-pointer w-[40px] h-[30px]'/>
    <FaInstagram className='cursor-pointer w-[40px] h-[30px]'/>
    <FaTwitter className='cursor-pointer w-[40px] h-[30px]'/>
    </div>

</div>


</div>
               </div>
      
    </div>
  )
}

export default Schedules
