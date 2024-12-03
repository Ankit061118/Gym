import React from 'react'
import { FaDumbbell } from "react-icons/fa6";
import img from '../assets/cta-bg.jpg'

const About = () => {
  return (
    <div id='about'>
      <div className="flex  flex-col gap-3 mt-24 items-center w-full h-auto ">
        <div className="text-white flex flex-col gap-3 items-center">
             <h1 className="font-bold text-3xl ">Choose <span className='text-orange-500'>Program</span></h1>
              <p className="text-gray-500 font-semibold">Gym Rat is the best gym and fitness center in the world.</p>
        </div>
        <div className="grid grid-cols-2 gap-7  text-white mt-10">
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
            <div className="flex mr-10 ml-16 mb-5">
                <div className="bg-orange-500  flex items-center h-[100px] w-[100px] justify-center">
                <FaDumbbell className=' text-5xl hover:scale-110 cursor-pointer '/>
                </div>
                <div className="flex flex-col ml-3 w-[250px]  ">
                    <h1 className="text-2xl white font-semibold">Basic Fitness</h1>
                    <p className='text-gray-500'>Here we provide some beginner excercise to fresher</p>

                </div>
           
            </div>
        </div>
      </div>

      <div className=" mt-20">
        <img src={img} alt="" className='relative'/>
        <div className="absolute top-[1450px] flex flex-col items-center w-full gap-5">
            <h1 className='text-white font-bold text-4xl'>DON'T <span className='text-orange-500'>THINK</span>, BEGIN <span className='text-orange-500'>TODAY</span>!</h1>
            <button className='p-3 bg-orange-500 text-white w-[120px] rounded-md font-semibold'>Join Today</button>
        </div>
      </div>
    </div>
  )
}

export default About
