import React, { useState } from 'react'
import img1 from '../Assets/img1.jpeg'
import img2 from '../Assets/img2.jpeg'
import img3 from '../Assets/img3.jpeg'

function Slider() {

  const imgData = [img1, img2, img3]
  
  
  const [i, setI] = useState(0)

  setInterval(() => {
    if(i==imgData.length-1) setI(0)
    else setI(i+1)
  }, 5000);

  return(<div className=''>
      <img key={Math.random()} className='object-none animate-img h-[85vh] w-[100vw]' src={imgData[i]} alt="image" />
  </div>
    
    
  )
}

export default Slider