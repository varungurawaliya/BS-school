import React from 'react'

function Subscribe() {
  return (
    <div className='flex flex-col gap-8 items-center p-10 rounded-t-[100%] bg-[#ffa400] w-[100%] mt-10'>
        <div className='font-spectral text-5xl mt-16'>Subscribe</div>
        <div className='font-worksans text-base'>Sign up with you email address to recieve news and updates</div>
        <div className='font-worksans flex flex-wrap gap-6'>
            <input type="email" name="subscription" id="subscription" placeholder='Email Address' className='text-black px-5 py-4 w- text-base'/>
            <button for="subscription" className='bg-white px-8 py-3 rounded-full transition-all ease-linear hover:bg-[#11182e] hover:text-white'>Sign Up</button>
        </div>
        <div className='font-worksans text-base'>We respect your privacy.</div>
    </div>
  )
}

export default Subscribe