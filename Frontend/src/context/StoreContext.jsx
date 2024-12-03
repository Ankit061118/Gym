import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext=createContext({})

const AppContextProvider=(props)=>{
    const [user,setUser]=useState('user')
    const [state1, setState1] = useState("Home");
    const [token,setToken]=useState('')
    const [client,setClient]=useState({})
    const [trainer,setTrainer]=useState({})
    useEffect(() => {
        setToken(localStorage.getItem('token')) 
    }, [token])
    const getUser=async()=>{
       try {
        const response=await axios.get('http://localhost:8000/user/list')
        if(response.data.success){
            setClient(response.data.user)
        }
       } catch (error) {
        
       }
        
    }
    const getTrainer=async()=>{
        try {
         const response=await axios.get('http://localhost:8000/trainer/list')
         if(response.data.success){
             setTrainer(response.data.trainer)
         }
        } catch (error) {
         
        }
         
     }
    useEffect(() => {
        getUser()
        getTrainer()
    }, [])
    const value={
      user,setUser,state1,setState1,token,setToken,client,trainer
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export  default AppContextProvider