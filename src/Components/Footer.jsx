import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'

function Footer() {
  return (
    <div className='bg-[#ffa400] w-full flex flex-col items-center justify-center gap-7 pt-14 pb-6 text-[#11182e] text-lg font-montserrat'>
        <div className='flex justify-start items-center gap-14 px-10 max-[768px]:flex-col'>
            <div className='w-[20%] max-[700px]:w-52'>
                <img src={logo} alt="logo" className='invert'/>
            </div>
            <div className='flex justify-around w-full max-[700px]:flex-col gap-5'>
                <div className='flex flex-col gap-[1px] max-[700px]:items-center'>
                    <div className='font-bold text-2xl mb-2'>Quick Links</div>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="Events">Events</Link>
                    <Link to="Notifications">Notifications</Link>
                    <Link to="Contact">Contact Us</Link>
                </div>
                <div className='flex flex-col gap- max-[700px]:items-center'>
                    <div className='font-bold text-2xl mb-2'>Contact Us</div>
                    <div>Bharat School</div>
                    <div>Bilaspur Khurd, Gurugram</div>
                    <div className='mb-2'>Haryana IN - 122413</div>
                    <a href="tel:+919813214824" className='font-semibold hover:underline underline-offset-2 decoration-2 '><span>&#9742;</span> +91 9813214824</a>
                    <a href="mailto:bharatschoolbilaspur@gmail.com" className='font-semibold hover:underline underline-offset-2 decoration-2 max-[700px]:hidden'>&#9993; bharatschoolbilaspur@gmail.com</a>
                    <a href="mailto:bharatschoolbilaspur@gmail.com" className='font-semibold hover:underline underline-offset-2 decoration-2 min-[700px]:hidden'>&#9993; Click to e-mail</a>
                    <a href="http://" className='font-semibold underline mt-2 hover:font-bold'>Get Directions</a>
                </div>
            </div>
        </div>
        <div className='bg-[#1b2852] w-[95%] h-[2px]'></div>
        <div>
            &copy;2023 Varun | All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer