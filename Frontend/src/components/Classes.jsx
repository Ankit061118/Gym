import React,{useContext, useState} from 'react'
import img1 from '../assets/training1.jpg'
import img2 from '../assets/training2.jpg'
import img3 from '../assets/training3.jpg'
import img4 from '../assets/training4.jpg'
import { AppContext } from '../context/StoreContext'

 
const Classes = () => {
    const [state, setstate] = useState(1);
    const {setstate1}=useContext(AppContext)
  return (
    <div className='' id='classes'>
      <div className="main mt-[120px] flex w-full flex-col h-auto  text-white">
        <div className="top flex flex-col gap-3 items-center">
            <h1 className='text-white font-bold text-4xl'>OUR <span className='text-orange-500'>CLASSES</span></h1>
            <p className='text-gray-500 text-2xl font-semibold '>Enjoy our classes and extend your limits </p>
        </div>
        <div className="bottom grid grid-cols-2 mt-20 place-items-center gap-[-200px] w-[90vw]">
            <div className="left  "><ul className='flex flex-col gap-5'>
                  <li onClick={()=>setstate(1)} className={state==1?'text-white p-5 w-[200px]  rounded-md font-semibold  bg-orange-500 shadow-gray-600 ':'text-black p-5 w-[200px] rounded-md font-semibold  bg-white shadow-gray-600'}> First Training Class</li>
                  <li onClick={()=>setstate(2)} className={state==2?'text-white p-5 w-[200px] rounded-md font-semibold  bg-orange-500 shadow-gray-600 ':'text-black p-5 w-[200px] rounded-md font-semibold  bg-white shadow-gray-600'}> Second Training Class</li>
                  <li onClick={()=>setstate(3)} className={state==3?'text-white p-5 w-[200px] rounded-md font-semibold  bg-orange-500 shadow-gray-600 ':'text-black p-5 w-[200px] rounded-md font-semibold  bg-white shadow-gray-600'}> Third Training Class</li>
                  <li onClick={()=>setstate(4)} className={state==4?'text-white p-5 w-[200px] rounded-md font-semibold  bg-orange-500 shadow-gray-600 ':'text-black p-5 w-[200px] rounded-md font-semibold  bg-white shadow-gray-600'}> Fourth Training Class</li>
                 
                </ul>
               <a href="#schedules"> <button className='mt-4 w-[200px] bg-orange-500 p-4 rounded-md text-black font-semibold text-xl' onClick={()=>setstate1('Schedules')}>View all Schedules</button></a>
                </div>
            <div className="right mr-5  ">
                 <div className={state==1?'flex flex-col gap-5':'hidden'}>
                    <img src={img1} alt="" />
                    <h1 className='font-bold text-white text-3xl'>First Training Classes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ducimus excepturi aspernatur voluptate aperiam.</p>
                 </div>
                 <div className={state==2?'flex flex-col gap-5':'hidden'}>
                    <img src={img2} alt="" />
                    <h1 className='font-bold text-white text-3xl'>Second Training Classes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ducimus excepturi aspernatur voluptate aperiam.</p>
                 </div>
                 <div className={state==3?'flex flex-col gap-5':'hidden'}>
                    <img src={img3} alt="" />
                    <h1 className='font-bold text-white text-3xl'>Third Training Classes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ducimus excepturi aspernatur voluptate aperiam.</p>
                 </div>
                 <div className={state==4?'flex flex-col gap-5':'hidden'}>
                    <img src={img4} alt="" />
                    <h1 className='font-bold text-white text-3xl'>Fourth Training Classes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ducimus excepturi aspernatur voluptate aperiam.</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
