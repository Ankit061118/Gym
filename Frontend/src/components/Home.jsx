import React from 'react'
import Hero1 from './Hero1'
import About from './About'
import Classes from './Classes'
import Schedules from './Schedules'
import Contact from './Contact'
import Login from './Login'
import Navbar from './Navbar'

const Home = ({count,setCount}) => {
  return (
    <>
    <div className={count===true?"opacity-65":""} id='home'>
    <Navbar count={count} setCount={setCount}/>
      <Hero1/>
      <About/>
      <Classes/>
      <Schedules/>
      <Contact/>


    </div>
     
    </>
  )
}

export default Home
