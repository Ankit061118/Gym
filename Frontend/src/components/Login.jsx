import React, { useContext, useState } from 'react';
import { FaCross } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext,  } from '../context/StoreContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { user, setUser, setToken,token } = useContext(AppContext);
  const [info, setInfo] = useState('sign');
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      if (user === 'trainer') {
        const res = await axios.post('http://localhost:8000/trainer/login', data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success("Login successful");
          setToken(res.data.token)
          localStorage.getItem('token',token)
          navigate('/trainer');
          setData({
            username: "",
            email: "",
            password: ""
          });
        }
      } else if (info === 'sign') {
        const res = await axios.post('http://localhost:8000/user/register', data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success("Registration successful");
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
          navigate('/home')
        }
      } 
      else {
        const res = await axios.post('http://localhost:8000/user/login', data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success("Login successful");
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
          navigate('/home');
          setData({
            username: "",
            email: "",
            password: ""
          });
        } else {
          toast.error(res.data.message); 
          console.log(res.data.message); 
        }
      }
      
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.log(error)
    }
  };

  return (
    <div className=''>
      <div className="mt-32 bg-white h-auto w-[35vw] ml-[450px]">
        {user === 'user' ? (
          <div className="form">
            {info === 'sign' ? (
              <div className='flex flex-col p-5'>
                <h1 className='ml-4 text-orange-500 text-2xl font-bold mb-3'>User Sign In</h1>
                <form onSubmit={clickHandler} className='flex flex-col gap-3 items-center mb-2'>
                  <input name='username' value={data.username} onChange={onChangeHandler} type="text" placeholder='Enter the username' className='border outline-none border-gray-400 p-3 w-[400px]' />
                  <input name='email' value={data.email} onChange={onChangeHandler} type="email" placeholder='Enter the email' className='border outline-none border-gray-400 p-3 w-[400px]' />
                  <input name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Enter the password' className='border outline-none border-gray-400 p-3 w-[400px]' />
                  <button type="submit" className='bg-orange-500 w-[120px] text-white pt-2 pl-3 pb-2 pr-3 font-semibold text-lg rounded-md'>Sign In</button>
                </form>
                <p className='ml-20 text-gray-500 text-lg font-semibold'>Already have an account? <span onClick={() => setInfo('login')} className='text-orange-500 cursor-pointer'>Login</span></p>
                <button className='mt-4 ml-[155px] bg-orange-500 w-[120px] text-white pt-2 pl-3 pb-2 pr-3 font-semibold text-lg rounded-md' onClick={() => setUser('trainer')}>Trainer</button>
              </div>
            ) : (
              <div className='flex flex-col gap-3 p-5'>
                <h1 className='text-orange-500 text-2xl font-bold mb-3'>Login</h1>
                <input name='email' value={data.email} onChange={onChangeHandler} type="email" placeholder='Enter the email' className='border outline-none border-gray-400 p-3 w-[400px]' />
                <input name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Enter the password' className='border outline-none border-gray-400 p-3 w-[400px]' />
                <button onClick={clickHandler} className='bg-orange-500 w-[120px] text-white pt-2 pl-3 pb-2 pr-3 font-semibold text-lg rounded-md'>Login</button>
                <p className='text-gray-500 text-lg font-semibold'>Create an account? <span onClick={() => setInfo('sign')} className='text-orange-500 cursor-pointer'>Sign In</span></p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1 className='ml-4 text-orange-500 text-2xl font-bold p-4'>Trainer's Login</h1>
            <form onSubmit={clickHandler} className='flex flex-col gap-3 items-center mb-2'>
              <input name='email' value={data.email} onChange={onChangeHandler} type="email" placeholder='Enter the email' className='border outline-none border-gray-400 p-3 w-[400px]' />
              <input name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Enter the password' className='border outline-none border-gray-400 p-3 w-[400px]' />
              <button type="submit" className='bg-orange-500 w-[120px] text-white pt-2 pl-3 pb-2 pr-3 font-semibold text-lg rounded-md mb-3'>Login</button>
              <button className='bg-orange-500 w-[120px] text-white pt-2 pl-3 pb-2 pr-3 font-semibold text-lg rounded-md mb-3' onClick={() => setUser('user')}>User</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
