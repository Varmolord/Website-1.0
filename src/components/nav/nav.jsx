import React from 'react'
import './nav.css';
import {ImHome} from 'react-icons/im'
import {BsStars} from 'react-icons/bs'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {BsLightbulbFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {useState} from 'react'
//import Login from "../login/login"
export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
    

  return (
  <nav>
      <a 
      href="#" 
      className={activeNav === '#' ? 'active' : ''} 
      onClick={() => setActiveNav('#')}>
          <ImHome/>
      </a>


      <a 
      href="#about" 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active': ''}>
        <BsLightbulbFill/>
      </a>


      <a 
      href="#experience" 
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active': ''}>
        <BsStars/>
      </a>
      
      <a 
      href="#login" 
      id="loginbutton"
      onClick={() => setActiveNav('#login')} 
      className={activeNav === '#login' ? 'active': ''}>
        <FaUserAlt/>
      </a>

      <a 
      href="#services" 
      onClick={() => setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active': ''}>
        <MdMiscellaneousServices/>
      </a>


      <a 
      href="#portfolio" 
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active': ''}>
        <MdPhotoSizeSelectActual/>
      </a>


      <a 
      href="#contact" 
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active': ''}>
        <MdEmail/>
      </a>
  </nav>
  )
}
export default Nav