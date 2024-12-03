import { useContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero1 from './components/Hero1'
import About from './components/About'
import Classes from './components/Classes'
import Schedules from './components/Schedules'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from 'axios'
import Login from './components/Login'
import { AppContext } from './context/StoreContext'
import Trainer from './components/Trainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './components/Verify'
function App() {
  const [count, setCount] = useState(false)
  const {user}=useContext(AppContext)

  return (
  <>
      <div className='h-full w-full bg-black overflow-hidden'>
        
      <ToastContainer/>
      
      
     
      {
        user==='user'?
        <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path="/home" element={<Home count={count} setCount={setCount}/>}/>
                <Route path='/verify' element={<Verify/>}/>
        </Routes>:
        <Routes>
                 <Route path='/' element={<Login/>}/>
                 <Route path="/trainer" element={<Trainer count={count} setCount={setCount}/>}/>
        </Routes>
      }
      <Footer/>
      </div>
      
  </>
  )
}

export default App
