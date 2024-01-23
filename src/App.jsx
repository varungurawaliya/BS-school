import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom';
import { login, logout } from './store/authSlice'
import authService from "./appwrite/auth"
import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    authService.getCurrentUser()

    .then((userData) => {

      if (userData) {
        
        dispatch(login({userData}))
      } 
      else 
      {
        dispatch(logout())
      }
    })

  }, [])
 
  return (
    <div className = 'flex flex-col text-xl'>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
