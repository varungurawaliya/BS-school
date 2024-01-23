import React from 'react'
import Subscribe from '../Components/Subscribe'

function Career() {

  const vacancies = ["Associate Teacher", "Arts Teacher", "Middle School Teacher"]

  return (
    <div className='flex items-center flex-col font-worksans'>
      <div className='w-[50%] mt-14 text-lg flex flex-col items-center'>
        <div className='text-[#1b2852] text-5xl text-center'>Join Our Team</div>
        <div className='bg-[#1b2852] w-60 h-1 my-1 mb-5'></div>
        <div>We are seeking Mission-driven, hard-working, determined individuals to join our School. If you, like us, seek to change the world in which demography too often determines destiny, submit an application today.</div>
        
        <div className='my-10 flex flex-wrap gap-20 justify-start '>
        {
          vacancies.map((value) => {
            return (
              <div key={Math.random()} className='flex flex-col items-start gap-2'>
                <div className='text-[#1b2852] font-extrabold text-xl'>{value}</div>
                <button className='text-slate-600 font-semibold text-base underline underline-offset-2'>Apply here</button>
              </div>
            )
          })
        }
        </div>
      </div>

      <div className='bg-slate-200 w-full flex justify-evenly items-start py-20 rounded-[50px] max-md:flex-col max-md:items-center max-md:gap-5'>
        <div className='text-6xl text-[#1b2852] font-bold'>Application<br/>Process</div>
        <ol className='flex flex-col gap-5 text-2xl list-decimal'>
          <li>Application</li>
          <li>Phone Interview</li>
          <li>In-person Interview(s)</li>
          <li>Reference Checks</li>
        </ol>
      </div>

      <Subscribe/>
      <div className='bg-[#4d350d] w-full h-2  -5'></div>
    </div>
  )
}

export default Career