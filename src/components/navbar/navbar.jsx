import React, { useState } from 'react'
import './navbar.css'
import underline from '../../assets/transparent_1751267638_5188.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = ()=>{
    const [menu,setMenu]=useState("home");
    return (
        <div className='navbar'>
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?'.' : ''}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about ")}>About Me</p></AnchorLink>{menu==="about"? '.' : ''}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?'.' : ''}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?'.' : ''}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?'.' : ''}</li>
            </ul> 
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

                  
            
        </div>
    )
}



export default Navbar