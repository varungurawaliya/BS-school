import React from 'react'
import Slider from "../Components/Slider";
import Links from '../Components/Links';
import Events from '../Components/Events';
import Subscribe from '../Components/Subscribe';
import Notifications from '../Components/Notifications';
import Career from '../Components/Career';

function Home() {
  return (
    <div>
        <Slider/>
        <Links/>
        <Events/>
        <Subscribe/>
        <Notifications/>
        <Career/>
    </div>
  )
}

export default Home