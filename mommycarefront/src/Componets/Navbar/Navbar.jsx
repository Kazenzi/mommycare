import React, { useState } from 'react'
import './Navbar.css'
import { ImSpinner9 } from "react-icons/im";
import{PiDotsNineBold} from "react-icons/pi";
import{AiOutlineCloseCircle} from "react-icons/ai"


const Navbar = () => {

  // trackandupdatenavbar
  const[navBar,setNavBar]=useState("menu");
  // functiontoshownavbar
  const showNavBar=()=>{
    setNavBar("menu showNavbar");
  }
  return (
    <div className='navBar'>
       <div className="logoDiv">
       <ImSpinner9 className="icon"/>
       <span>Mommy Care</span>
       </div>
       <div className="navBar">
        <ul>
            <li className='navlist'>Nutrition tips</li>
            <li className='navlist'>Emergency</li>
            <li className='navlist'>Blogs</li>
            <li className='navlist'>Daycarelocator</li>
            <li className='navlist'>Chat</li>
        </ul>
        {/* removenav */}
        <AiOutlineCloseCircle className="icon closeIcon"/>
       </div>
       <button className='chatBtn btn'>
        Chat Us
             </button>
       <PiDotsNineBold className="icon menuIcon" onClick={showNavBar}/>
       </div>
       
  )
}

export default Navbar