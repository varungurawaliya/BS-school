import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'appwrite'
import NotfService from '../Appwrite/notfConfig'

function Notifications() {

  const [notf, setNotf] = useState({})

    useEffect(() => {

      NotfService.getNotfs([Query.orderAsc('$createdAt'), Query.limit(1)]).then((notfs) => {

        if(notfs)
          setNotf(notfs.documents[0])
        
      })
    }, [])     

  return (
    <div className="z-0 box-border bg-[url('Assets/notifications.jpg')] bg-cover h-[600px] w-full font-worksans flex flex-wrap justify-center">
        <div className='bg-[#ffa400] rounded-b-[3rem] ml-[65%] mr-[12%] mt-[10%] flex flex-col h-72 w-3/12 max-[768px]:w-10/12 max-[768px]:mx-0'>
            <Link to='Notifications' className='text-white bg-[#11182e] h-[40%] text-3xl p-5 font-extrabold'>Important Notifications</Link>
                 
                  <a href={NotfService.getFileDownload(notf.fileId ? notf.fileId : "null")} 
                      target="_blank"
                      className=' h-[50%] px-6 py-5 w-full text-wrap truncate hover:underline'>
                    
                    {notf.title}</a>
        </div>
    </div>
  )
}

export default Notifications