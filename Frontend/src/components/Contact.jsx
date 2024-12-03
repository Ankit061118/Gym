import React from 'react'
import img from '../assets/slide-01.jpg'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contact flex items-center justify-center w-full h-auto mt-[200px]">
            <img src={img} alt="" className="relative" />
          <div className="form bg-white w-[50vw] h-auto absolute flex flex-col  p-10 gap-5 ">
                   <h1 className='text-black font-bold text-3xl ml-[200px] mb-[30px]'>Your <span className='text-orange-500'>Query</span></h1>
                 <div className="flex gap-6   ">
                    <input type="text" className='p-2 outline-none border   w-[300px] border-gray-400' placeholder='Enter Name'/>
                    <input type="email" className='p-2 outline-none border   w-[300px] border-gray-400 ' placeholder='Enter Email'/>
                 </div>
                 <input type="text" name="" id="" placeholder="Subject" className="p-2 outline-none border  w-[600px] border-gray-400" />
                 <textarea name="" id=""  placeholder='Message' className='h-[180px] p-2 w-[600px] outline-none border border-gray-400 '></textarea>
                 <button className='font-bold bg-orange-500 text-white p-3 rounded-md w-[140px] h-auto ' >Send message</button>
          </div>
        </div>
      
    </div>
  )
}

export default Contact
