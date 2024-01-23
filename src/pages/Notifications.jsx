import React, { useState, useEffect } from 'react'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux';
import NotfService from '../Appwrite/notfConfig'
import ReactLoading from 'react-loading'
import { GrDocumentPdf } from "react-icons/gr";

function Notifications() {

  const [notf, setNotf] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleted, setDeleted] = useState(false)
  
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {

    setLoading(true)

    NotfService.getNotfs([Query.orderDesc('$createdAt')]).then((notfs) => {

      if(notfs)
        setNotf(notfs.documents)
      
      setLoading(false)

    })

  }, [deleted])


  return (

    loading ? 

      <div className='flex justify-center h-[500px] items-center '>
        <ReactLoading  type="bars" color="#11182e" height='150px' width='150px' />
      </div> 
      
    :

    <div className='flex flex-col items-center gap-2 font-worksans'>
      <div className='text-[#1b2852] text-center font-bold text-5xl mt-20'>Notifications</div>
      <div className='bg-[#1b2852] w-52 h-1 '></div>

      <div className='w-full px-20 my-14 flex flex-col gap-4 max-md:px-5'>
        {
          notf.map( notf => {
            
              const {title, fileId, $id} = notf

              return (
                
                <div key={$id} className='flex gap-3'>
                  <GrDocumentPdf className='self-center'/>

                  <a href={NotfService.getFileDownload(fileId)} 
                      download={title}
                      target="_blank"
                      className='overflow-hidden self-center hover:underline'>
                      {title}</a>

                  <div className='self-center'>({notf.$createdAt.slice(0,10)})</div>
                  
                  {authStatus && <button className="ml-auto min-w-24 h-12 rounded-lg bg-[#ffa400] hover:bg-[#ffa400]/[0.6]"
                                    onClick={() => {

                                      NotfService.deleteNotf($id).then(
    
                                      setTimeout(() => {
                                        setDeleted(prev => !prev)
                                      }, 1000))
                                      
                                    }}>Delete</button>}
                </div>
              )            
          })
        }
      </div>
    </div>
  )
}

export default Notifications