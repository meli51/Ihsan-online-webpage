import React from 'react'
import './Programms.css'
import  program1 from '../../assets/reyad2.jpg'
import  program2 from  '../../assets/rewdetule1.jpg'
import program3 from '../../assets/kitab twhid1.jpg'
import program_1icon from '../../assets/hadith1.jpg'
import program_2icon from '../../assets/sira2.png'
import program_3icon from '../../assets/icon twihid1.png'



const Programms = () => {
  return (
    <div className='programs'>
      <div className="program">
<img src={program3} className='twhid' alt="" />
<div className="caption">
    <img src={program_3icon} alt="" />
    <p>tawhid</p>
    

</div>
  
   </div>
  <div className="program">
  <img src={program2} className='rewda' alt="" />
  <div className="caption">
    <img src={program_2icon} alt="" />
    <p><a href="https://alrashidmosque.ca/wp-content/uploads/2019/05/The-Life-of-The-Prophet-Muhammad.pdf"> Seera Click here</a></p></div></div>
   
    <div className="program">
         <img src={program1} className='reyad' alt="" />
   <div className="caption">
    <img src={program_1icon} alt="" />
    <p>Hadith</p></div>
   </div> 
 </div>
)

}

export default Programms