import React from 'react'
import images from '../src/image/download.jpg'
import Common from './Common'

const About = () => {
    return (
        <>
        <Common name='Welcome to About page' imgsrc={images} visit='/contact' btname='Contact Now'/>
        </>
    )
}

export default About
