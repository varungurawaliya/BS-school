import React, { useState, useEffect } from 'react'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'
import eventService from '../Appwrite/eventsConfig'
import Modal from '../Components/Modal'
import ReactLoading from 'react-loading'
import { RxCross1 } from "react-icons/rx";


function Events() {

  const [events, setEvents] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [deleted, setDeleted] = useState(false)
  const [eventData, setEventData] = useState({})

  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {

    setLoading(true)

    eventService.getEvents([Query.orderDesc('$createdAt')]).then((events) => {

      if(events)
        setEvents(events.documents)
      
      setLoading(false)

    })
  }, [deleted])

  return (
    loading ? 

      <div className='flex justify-center h-[500px] items-center '>
        <ReactLoading  type="bars" color="#11182e" height='150px' width='150px' />
      </div>      
    :


    <div className='relative w-full flex flex-col items-center font-worksans'>

      {
        open ? 

        <div className='absolute w-full h-full p-10 flex flex-col items-end self-center backdrop-blur-xl'>
          <RxCross1 onClick={() => setOpen(false)} size={30}/>
          <Modal event={eventData}/>
        </div> 
        : null
      }

      <div className='text-[#1b2852] font-bold text-6xl mt-24 text-center'>Recent <span className='font-normal'>Events</span></div>
      <div className='bg-[#1b2852] w-40 h-1 my-2'></div>

      <div className='w-full flex flex-wrap justify-center py-8'>
        {
          events.map(event =>(

            <div key={event.$id} className='flex flex-col h-[60vh] w-1/4 bg-[#283a74] rounded-3xl p-4 m-4 text-white max-md:w-1/3 max-sm:w-1/2'>

              <img 
                src={eventService.getImagePreview(event.imageId)} alt={event.title}
                className='h-[70%] object-cover justify-center mb-4 rounded-xl'
                
                onClick={() => {

                  setOpen(true)
                  setEventData({
                    title: event.title,
                    description: event.description,
                    imageId: event.imageId
                  })
  
                }}
              />

              <div>{event.title}</div>
              <div>{event.description}</div>
                
              {authStatus && <button className="ml-auto min-w-16 h-8 text-base rounded-lg my-auto self-end bg-[#ffa400] hover:bg-[#ffa400]/[0.6]"
                                onClick={() => {

                                  eventService.deleteEvent(event.$id).then(

                                  setTimeout(() => {
                                    setDeleted(prev => !prev)
                                  }, 1000))
                                  
                                }}>Delete</button>}
          
            </div>            
          ))
        }
      </div>
    </div>
  )
}

export default Events