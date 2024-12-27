import React from 'react'
import './Hero.css'

const Hero =() =>
{
    return(
        <div className="container hero-section flex">
                     <div className="hero-left">
                        <h1>T20 Cricket Central: Your Ultimate Destination</h1>
                        <p>Dive into the fast-paced world of T20 cricket with our comprehensive website!</p>
                      </div>
                      <div className="hero-right">
                       <img src="https://cricketimages06.s3.ap-south-1.amazonaws.com/aboutus.png" />
                    </div>
             </div>
    )
}

export default Hero