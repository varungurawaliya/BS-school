import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import ReactLoading from 'react-loading'

function Logout() {    
    
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {       

  authService.logout().then(()=>{
    dispatch(logout())
        
  }).then(() => {

      navigate('/')
  })
  
  }, [])
    
    
  return (
    
    <div className='flex justify-center h-[500px] items-center '>
        <ReactLoading  type="bars" color="#11182e" height='150px' width='150px' />
    </div> 
    
  )
}

export default Logout