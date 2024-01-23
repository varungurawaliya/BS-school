import React, { useState, useEffect, useRef } from 'react';
import eventService from '../Appwrite/eventsConfig'
import { Query } from 'appwrite';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa"

function Events() {
    
    var len, liveEvents = []

    screen.width < 1200 ? len = 2 : len = 3

    const currentRef = useRef()
    const eventRef = useRef()

    const [events, setEvents] = useState([])
    const [animate, setAnimate] = useState(true)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        
        eventService.getEvents([Query.orderDesc('$createdAt'), Query.limit(10)]).then((events) => {
            if(events){
              setEvents(events.documents);
            }
        })
    }, [])

    useEffect(() => {
        
        const id = setInterval(increment, 10000);

        return () => clearInterval(id)
    }, [])
    

    useEffect(() => {   currentRef.current = current   }, [current])
    useEffect(() => {   eventRef.current = events.length   }, [events])
        
    const increment = () => {
        
        if(currentRef.current == eventRef.current - 1) 
            setCurrent(0)
        else 
            setCurrent(prev => prev + 1)
      
        setAnimate(true)
    }

    const nextEvent = () => {

        if(currentRef.current != events.length - 1 ) 
            setCurrent(prev => prev + 1) 
        else 
            setCurrent(0)

        setAnimate(true)
    }

    const prevEvent = () => {

        if(currentRef.current != 0 ) 
            setCurrent(prev => prev - 1)
        else 
            setCurrent(events.length - 1)

        setAnimate(true)
    }

    if(current+len <= events.length) 
        liveEvents = events.slice(current, current+len)
    else 
        liveEvents = events.slice(current).concat(events.slice(0, current+len-events.length))
    
    return (
        
    <div className='flex flex-col items-center gap-4'>
        <div className='text-[#1b2852] text-center font-worksans font-bold text-5xl'>Recent <span className='font-normal'>Events</span></div>
        <div className='bg-[#1b2852] w-40 h-1 my-2'></div>
        <div className='flex flex-row flex-wrap justify-center gap-10 px-2 text-lg font-montserrat'>

        {
            liveEvents.map((element) => {

                const {title, description, imageId} = element

                return ( 
                    <div className = {animate ? `animate-events` : null }
                        
                        key={Math.random()} >

                        <div className='text-white my-3 w-[28vw] h-80 grid grid-cols-1 gap-2 grid-rows-3 transition-all duration-500 delay-0 rounded-se-3xl rounded-es-3xl  group bg-[#11182e]' >
                            
                            <img className='col-start-1 col-end-2 row-start-1 row-end-4 justify-self-center self-stretch rounded-se-3xl rounded-es-3xl object-cover w-full group-hover:hidden'
                                src={eventService.getImagePreview(imageId)} alt="" />
                            <div className='col-start-1 col-end-2 row-start-3 row-end-4 self-end font-extrabold mb-10 mx-10 h-1/2 overflow-hidden hover:underline group-hover:row-start-1 group-hover:row-end-2 group-hover:mt-10 group-hover:self-start'
                                >{title}</div>
                            <div className='col-start-1 col-end-2 row-start-2 row-end-4 self-start font-normal text-base mb-10 mx-10 h-5/6 overflow-hidden hidden group-hover:block'
                                >{description}</div>                       
                        </div>
                    </div>                    
            )})
        }
        </div>

        <div className='flex flex-row justify-center gap-6 '>

            < FaRegArrowAltCircleLeft onClick={prevEvent} size={30} className='text-[#1b2852] hover:text-[#1b2852d3]'/>
            < FaRegArrowAltCircleRight onClick={nextEvent} size={30} className='text-[#1b2852] hover:text-[#1b2852d3]'/>

        </div>
    </div>
  )
}

export default Events