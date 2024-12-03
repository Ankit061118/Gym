import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/StoreContext';
import axios from 'axios';

const Trainer = () => {
  const { token, client } = useContext(AppContext);
  const [id, setId] = useState('');
  const [trainer,setTrainer]=useState({})
  setTrainer(client.Trainer)
  console.log(trainer)

  const getId = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/trainer/trainer', { headers: { token } });
      if (data.success) {
        setId(data.trainer._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getId();
  }, [token]);

  const Logout=()=>{
    localStorage.setItem('token','')
     navigate('/')
  }
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className='relative'>
      <div className="absolute">
        <button onClick={()=>Logout} className='border border-black bg-white text-black w-auto h-auto text-center p-2 rounded-sm'>LogOut</button>
      </div>
      <h1 className='text-white'>Your Clients</h1>
      {client && client.map((item, index) => (
        item.Trainer[id] === id ? (
          <div key={index}>
            <p>Name: {item.name}</p>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Trainer;
