import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

function Navbar() {
  const [ sticky, setsticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true): setsticky(false)
    })
  }, []);
  
  const [mobileMenu, setMobileMenu] =useState(false);
  const toggleMenu = () =>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
       <img src={logo}  alt="" className='logo' /> 
        <ul className={mobileMenu? '':'hide-mobile-menu'}> 
          
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link> </li>
            <li><Link to='programs' smooth={true} offset={-275} duration={500} >Kitabs</Link> </li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >About School</Link></li>
            <li><Link to='campus' smooth={true} offset={-275} duration={500} > Methods</Link> </li>
            <li><Link to='testimoniels' smooth={true} offset={-260} duration={500} >Advantages</Link> </li>
            <li><Link to='contact' smooth={true} offset={-270} duration={500} ><button className='btn'> Contact us</button> </Link></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar