import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../Assets/career.jpg'

function Career() {

  const navigate = useNavigate()
  return (
    <div className='box-border flex items-center justify-center gap-[10%] bg-gradient-to-r from-[#11182e] to-blue-900 h-[650px] w-full text-white'>
        <div className='font-worksans flex flex-col justify-center items-start gap-10 w-[30%]'>
            <div className='text-5xl font-extrabold '> Staff<br/>Recruitment</div>
            <div>We are seeking Mission-driven, hard-working, determined individuals to join our School.</div>
            <button onClick={()=> navigate('Career')} className='border-white border-solid border-2 rounded-full py-4 px-8 transition-all ease-linear hover:text-[#11182e] hover:bg-white'>View Careers</button>
        </div>
        <div className='w-[40%]'> 
            <img src={img} alt="career" className='w-full clip-hexagon'/>
        </div>
    </div>
  )
}

export default Career