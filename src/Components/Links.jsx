import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TfiSupport } from "react-icons/tfi";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { MdEvent } from "react-icons/md";
import { GrResources } from "react-icons/gr";


function Links() {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col font-worksans max-w-[900px] gap-2 my-12 mx-6'>

<div className='text-[#1b2852] text-center font-bold text-5xl'>Bharat School Bilaspur</div>
<div className='text-center text-3xl'>welcomes you</div>
<div className='bg-[#1b2852] w-40 h-2 my-1 self-center rounded-xl'></div>
<div className='text-[#1b2852] text-center text-base opacity-60'>Our Mission for Children is to empower our children to achieve their greatest potential both
as students and as members of their communities.</div>

<div className='flex flex-row justify-center gap-10 flex-wrap my-6 items-center'>

    <button onClick= { () => navigate("/About")} className='bg-[#11182e] text-white py-8 gap-3 min-w-40 flex flex-col items-center rounded-md text-lg transition-all ease-linear hover:bg-[#11182ec1] hover:text-black'>
        <TfiSupport size={40}/>About</button>
    <button onClick= { () => navigate("/Career")} className='bg-[#11182e] text-white py-8 gap-3 min-w-40 flex flex-col items-center rounded-md text-lg transition-all ease-linear hover:bg-[#11182ec1] hover:text-black'>
        <PiChalkboardTeacherBold size={40}/>Career</button>
    <button onClick= { () => navigate("/Events")} className='bg-[#11182e] text-white py-8 gap-3 min-w-40 flex flex-col items-center rounded-md text-lg transition-all ease-linear hover:bg-[#11182ec1] hover:text-black'>
        <MdEvent size={40}/>Events</button>
    <button onClick= { () => navigate("/Contact")} className='bg-[#11182e] text-white py-8 gap-3 min-w-40 flex flex-col items-center rounded-md text-lg transition-all ease-linear hover:bg-[#11182ec1] hover:text-black'>
        <GrResources size={40}/>Contact Us</button>
</div>
</div>
    </div>
    
  )
}

export default Links