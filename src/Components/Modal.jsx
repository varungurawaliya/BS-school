import React from 'react'
import eventService from '../Appwrite/eventsConfig'

function Modal({event}) {
   
  return (
    
    <div key={Math.random()} className='flex flex-col self-center h-[80vh] bg-white rounded-3xl p-4 max-sm:h-[60vh]' >

        <img src={eventService.getImagePreview(event.imageId)} alt={event.title}
            className='object-cover h-[80%] justify-center mb-4 rounded-xl'/>

        <div className='font-semibold text-3xl'>{event.title}</div>
        <div className='mt-2'>{event.description}</div>

    </div>    
  )
}

export default Modal