import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col font-worksans items-center my-32 gap-14 w-full'>
        <div className='text-[#1b2852] text-center font-bold text-5xl'>Dashboard</div>
        
        <div className='flex flex-col gap-8 w-full items-start p-10'>
          <button className='text-2xl underline-offset-2 hover:underline' 
            onClick={() => {navigate('/AddNotf')}}>Add Notification</button>

          <button className='text-2xl underline-offset-2 hover:underline' 
            onClick={() => {navigate('/AddEvent')}}>Add Event</button>
        </div>
    </div>
  )
}

export default Dashboard