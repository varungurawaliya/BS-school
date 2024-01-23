import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center font-worksans gap-20 py-52 w-full max-[700px]:flex-col'>
      <div className='w-[40%] flex flex-col gap-5 max-[700px]:w-[80%]'>
        <div className='text-5xl'>Have a question or just need to get in touch?</div>
        <div className='text-3xl'>Fill out the form & we’ll get back to you!</div>
      </div>

      <form className='bg-[#ffa400] flex flex-col text-sm gap-5 p-8 rounded-3xl w-[40%] max-[700px]:w-[80%]'>

        <div className='text-base'>Name (Required)</div>
        <div className='flex gap-[10%]'>
          <div className='flex flex-col w-[45%]'>
            <label htmlFor="Fname">First Name</label>
            <input type="text" name="Fname" id="Fname" required className='h-10 px-2 border border-solid border-black'/>
          </div>
          <div className='flex flex-col w-[45%]'>
            <label htmlFor="Lname">Last Name</label>
            <input type="text" name="Lname" id="Lname" className='h-10 px-2 border border-solid border-black'/>
          </div>
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="mobile">Mobile (Required)</label>
          <input type="tel" name="mobile" id="mobile" maxlength="14" required className='h-10 px-2 border border-solid border-black'/>
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="msg">Message (Required)</label>
          <textarea name="msg" id="msg" required className='h-32 p-2 text-wrap border border-solid border-black '/>
        </div>

        <div className='text-center'>
          <button className='bg-[#11182e] text-base text-white w-32 px-8 py-3 rounded-full transition-all ease-linear hover:bg-white hover:text-black'>
            Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default Contact