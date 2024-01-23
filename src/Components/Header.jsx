import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  Routes  from "./Routes";
import {useSelector} from 'react-redux'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr";
import logo from '../Assets/logo.svg'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const routes = Routes()

  return (
  <div className='box-border h- flex flex-row w-full justify-between items-center bg-[#11182e] py-5'>
    
    <Link to='/' className=' ml-8 text-center w-[13%] max-[700px]:w-32'>
      <img src={logo} alt="logo"/>
    </Link>
    

    <div className='flex flex-row justify-evenly items-center' >
      {
        routes.map((route) => {
        const{title, href} = route

        return(
          route.active ?

          <button key={Math.random()} className='text-white mx-3 py-2 text-lg font-worksans hover:underline underline-offset-8 decoration-2 max-[1000px]:hidden'
          onClick={()=> navigate(href)}>{title}</button> : null
        )}
        
      )}


        <a href="https://facebook.com" className='ml-10 mr-3 max-[1100px]:m-1'>
          <FaFacebookSquare className='text-white text-4xl max-[1000px]:hidden' />
        </a>

        <a href="https://instagram.com" className='ml-3 mr-10 max-[1100px]:m-1'>
          <GrInstagram className='text-white text-4xl max-[1000px]:hidden'/>
        </a>

        {!authStatus && <Link to = "/Login" className={`${open && `hidden` } animate-icon bg-[#ffffff] ml-3 mr-5 px-3 py-1 rounded-3xl border-2 transition-all ease-linear hover:bg-[#11182e] hover:text-white font-worksans text-lg text-center max-[300px]:hidden max-[400px]:text-sm `}>
          Login</Link>}

        {authStatus && <Link to = "/Logout" className={`${open && `hidden` } animate-icon bg-[#ffffff] ml-3 mr-5 px-3 py-1 rounded-3xl border-2 transition-all ease-linear hover:bg-[#11182e] hover:text-white font-worksans text-lg text-center max-[300px]:hidden max-[400px]:text-sm `}>
        Logout</Link>}

        <button onClick={() => setOpen(prev => !prev)}>
          {!open && <RxHamburgerMenu className='animate-icon h-10 mr-5 min-[1000px]:hidden text-white text-5xl'/>}
          {open && <RxCross1 className='animate-icon h-10 mr-5 min-[1000px]:hidden text-white text-5xl'/>}
        </button>

        {open && (
          <ul className='absolute flex flex-col gap-3 z-10 w-full right-0 top-20 animate-icon bg-[#182141] px-2 pt-4 pb-8 font-worksans'>
            {routes.map ( route => {
              const {title, href} = route

              return (
                route.active ?

                <li key={Math.random()} className='border-b-[1px] border-white border-solid pb-2 pt-2'>
                  <a className='text-white mx-4 my-4 py-3 text-2xl font-worksans'
                  onClick={()=> {
                    
                    setOpen(false)
                    navigate(href)

                  }}>{title}</a>
                  
                </li> : null
              )
            })}
          </ul>
        )}
    
    </div>        
  </div>
    
  )
}

export default Header