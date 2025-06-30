import React from 'react'
import './hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'




const Hero =()=>{
    return (
        <div id="home" className='hero'>
            {/* <img src={NIMISHA}  alt=''/> */}
            <h1><span>I'm Nimisha Agrawal,</span>Web Developer</h1>
            <p>Hi, I'm Nimisha Agrawal — a passionate Web Developer.
I specialize in building modern, responsive, and user-friendly websites and web apps using technologies like React.js, JavaScript, HTML, CSS, and Tailwind CSS. 

🚀 Let’s build something amazing together!</p>
<div className='hero-action'>
    <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    <div className='hero-resume'>My resume</div>
    
</div>

        </div>
    )
}
export default Hero