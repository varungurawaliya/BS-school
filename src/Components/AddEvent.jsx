import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import eventService from '../Appwrite/eventsConfig'
import ReactLoading from 'react-loading'
import logo from '../Assets/logo.svg'

function AddEvent() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submitHandler = async (event) => {
    
    setLoading(true)    
    event.preventDefault()

    const image = await eventService.uploadImage(event.target.image.files[0])

    const title = event.target.title.value
    const description = event.target.description.value
    const imageId = image.$id

    eventService.createEvent({title, description, imageId})

    navigate('/Events')               
  }

  return (
    loading ? 

      <div className='flex justify-center h-[500px] items-center '>
          <ReactLoading  type="bars" color="#11182e" height='150px' width='150px' />
      </div>     
    :

    <div className='flex flex-col items-center gap-20 w-full my-32 font-worksans'>

      <div className='text-[#1b2852] text-center font-bold text-5xl'>Add Notification</div>

      <form onSubmit={submitHandler} className='flex flex-col max-w-xl bg-[#11182e] gap-8 p-10 text-white rounded-3xl'>

        <div className="mb-8 flex justify-center">
          <span className="inline-block">
            <img src={logo} alt="logo" className='h-16'/>
          </span>
        </div>

        <div className='flex gap-5'>
          <label htmlFor="file" className='text-nowrap'>Upload Image :</label>
          <input type="file" id='image'/>
        </div>

        <div className='flex gap-5'> 
          <label htmlFor="title" className='text-nowrap'>Title :</label>
          <textarea id="title" placeholder='Enter your title here' className='text-black h-20 w-full p-2 rounded-lg'></textarea>
        </div>
        
        
        <div className='flex gap-5'>
          <label htmlFor="description" className='text-nowrap'>Description :</label>
          <textarea id="description" placeholder='Enter your description here' className='text-black h-20 w-full p-2 rounded-lg'></textarea>
        </div>        

        <button type="submit" className="w-full h-12 mt-3 rounded-lg bg-[#ffa400] hover:bg-[#ffa400]/[0.6]">Submit</button>
        
      </form>

    </div>
  )
}

export default AddEvent