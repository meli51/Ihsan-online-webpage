import React from 'react'
import Navbar from './Components/navBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programms from './Components/Programms/Programms'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallary/Gallery'
import Manners from './Components/Manners/Manners'
import Contact from './Components/Contact/Contact'
import Footor from './Components/Footer/Footor'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import Behaviour from './Components/Behaviours/Behaviour'
const App = () => {
  const [playState, setPlayState] =useState(false);

  
  return (
    <div> 
      
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle
      ='OUR PROGRAM' title='what we offer'/>
      <Programms/></div>
      <About setPlayState={setPlayState}/>
      <Title title
      ='ትምህርቱ የሚሰጥበት መንገድ'/>
      <Gallery/>
      <Title 
       title='ሲራን የመማር ጥቅም'/>
     <Manners/>  
     <Behaviour/>
     <Title subTitle
      ='Contact us' title='በሚከተለዉ አድራሻችን ያግኙን'/>
      <Contact/>
      <Footor/>

       
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
       </div>
       

  )
}


export default App