import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We will make the search for knowlage more interesting and effective </h1>
        <p>our method of teaching makes students more interactive good readers, and help them to have better time managment skills</p><button className='btn'>explore more <img src={dark_arrow} className='dark-arrow' alt="" /></button>
      </div>
    </div>
  )
}

export default Hero