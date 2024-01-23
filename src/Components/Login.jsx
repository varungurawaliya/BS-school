import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import service from "../Appwrite/auth"
import { login as authLogin } from '../store/authSlice'
import ReactLoading from 'react-loading'
import logo from '../Assets/logo.svg'

function Login() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const login = async(data) => {

        setError("")
        setLoading(true)

        try {            
            const session = await service.login(data)
            
            if (session) {
                const userData = await service.getCurrentUser()

                if (userData)                     
                    dispatch(authLogin({userData}))
                
                setLoading(false)                
                navigate("/Dashboard")
            } 
        } 
        catch (error) {
            setError(error.message)
        }
    }

  return (    

    loading ? 

        <div className='flex justify-center h-[500px] items-center '>
            <ReactLoading  type="bars" color="#11182e" height='150px' width='150px' />
        </div> 
    
    :

    <div className="flex flex-col items-center justify-center w-full my-32 font-worksans text-white mx-auto max-w-lg bg-[#11182e] rounded-3xl p-10">

        <div className="mb-8 flex justify-center">
            <span className="inline-block">
                <img src={logo} alt="logo" className='h-16'/>
            </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Admin Login</h2>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8 flex flex-col gap-5 w-full text-black'>

                <input label="Email: " placeholder="Enter your email" type="email" className='w-full rounded-lg h-10 p-2'
                
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />

                <input label="Password: " type="password" placeholder="Enter your password" className='w-full rounded-lg h-10 p-2'
                {...register("password", {
                    required: true,
                })}
                />

                <button type="submit" className="w-full h-12 mt-3 rounded-lg bg-[#ffa400] hover:bg-[#ffa400]/[0.6]">
                    Sign in</button>
        </form>

    </div>
    
  )
}

export default Login