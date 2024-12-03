import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/StoreContext';


const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get('success')
    const {token}=useContext(AppContext)
    
    
    const navigate=useNavigate()

    const verifyPayment =async() =>{
        try {
          const response=await axios.post ("http:localhost:8000/user/verify",{success},{headers:{token}})
        if(response.data.success){
             navigate('/home')
             toast.success("Fee paid successfully")
        }
        else{
            navigate('/home')
            toast.error("Fee paid unsuccessfully")
        }
        } catch (error) {
          console.log(error)
          navigate('/home')
          
        }
    }
    useEffect(()=>{
      verifyPayment()
    },[])
  return (
    <div className="flex justify-center items-center my-[160px]"> <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div> </div>
  )
}

export default Verify
