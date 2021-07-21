import React from 'react'
import images from '../src/image/image1.jpg'
import Common from './Common'


const Home = () => {
    return (
        <>
         <Common name='Grow your business with' imgsrc={images} visit='/services' btname='Get Started'/> 
            
        </>
    )
}

export default Home
