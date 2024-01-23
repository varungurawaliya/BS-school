import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children}) {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    useEffect(() => {
        if(!authStatus) navigate('/Login')
    }, [authStatus, navigate])
    
  return children
}

export default Protected