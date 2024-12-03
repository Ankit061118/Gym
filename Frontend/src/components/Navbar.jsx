import React, { useState, useContext } from 'react';
import { FaUser, FaDumbbell } from 'react-icons/fa';
import { AppContext } from '../context/StoreContext';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { GiMoneyStack } from 'react-icons/gi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ count, setCount }) => {
  const { state1, setState1, token } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const navigate=useNavigate()

  const PaymentHandler = async () => {
    console.log(token)
    try {
      const response = await axios.post('http://localhost:8000/user/fee', {}, { headers: { token } });
      if (response.data.success) {
        const {session_url}=response.data;
        window.location.replace(session_url)
        toast.success(response.data.message);
        setShow(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const Logout=()=>{
    localStorage.setItem('token','')
     navigate('/')
  }

  return (
    <div>
      <div className={state1 === 'Home' ? 'fixed z-10 flex justify-between items-center h-[100px] bg-transparent shadow-md m:h-[100px] w-full' : 'fixed z-10 flex justify-between items-center h-[100px] bg-black shadow-md m:h-[100px] w-full'}>
        <div className="flex gap-3 m-10 w-[300px] font-bold text-3xl text-orange-500 title">
          <span className="text-white">Gym</span> Rats <FaDumbbell className="mt-1 rotate-45 h-[30px]" />
        </div>
        <div className="mr-7 w-[700px] text-white">
          <ul className="flex justify-between font-bold">
            <a href="#home"><li onClick={() => setState1('Home')} className={state1 === 'Home' ? 'text-orange-500 cursor-pointer' : 'cursor-pointer'}>Home</li></a>
            <a href="#about"><li onClick={() => setState1('About')} className={state1 === 'About' ? 'text-orange-500 cursor-pointer' : 'cursor-pointer'}>About</li></a>
            <a href="#classes"><li onClick={() => setState1('Classes')} className={state1 === 'Classes' ? 'text-orange-500 cursor-pointer' : 'cursor-pointer'}>Classes</li></a>
            <a href="#schedules"><li onClick={() => setState1('Schedules')} className={state1 === 'Schedules' ? 'text-orange-500 cursor-pointer' : 'cursor-pointer'}>Schedules</li></a>
            <a href="#contact"><li onClick={() => setState1('Contact')} className={state1 === 'Contact' ? 'text-orange-500 cursor-pointer' : 'cursor-pointer'}>Contact</li></a>
          </ul>
        </div>
        <div className="relative">
          <FaUser className="cursor-pointer mr-10 text-white text-4xl border border-white rounded-full p-1" onClick={() => setShow(!show)} />
          {show ? (
            <div className="absolute w-auto h-auto p-4 bg-white text-black font-medium text-xl right-10 top-12">
              <h1 className="flex gap-3" onClick={Logout}>Logout <RiLogoutCircleRLine className="mt-1 text-xl" /></h1>
              <hr className="my-2" />
              <h1 className="flex gap-3" onClick={PaymentHandler}>Fee <GiMoneyStack className="mt-1 text-xl" /></h1>
              <hr className="mt-2" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
