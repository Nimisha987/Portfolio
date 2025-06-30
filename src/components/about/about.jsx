import React from 'react'
import './about.css'
import profile from '../../assets/Untitled_design.svg'
const About=()=>{
    return (
        <div id="about" className='about'>
            <div className='about-title'>
                <h1>About  Me</h1>
            </div>
            <div className="about-sections">
                <div className='about-left'>
                    <img src={profile} alt=''/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate and creative Web Developer with a strong foundation in frontend and backend technologies. I love turning ideas into interactive, responsive, and user-friendly websites</p>

                    </div>
                    <div className="about-skills">
                        
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>TailwindCss</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>10th Class</h2>
                    <p>91.6%</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h2>12th Class</h2>
                    <p>86.2%</p>
                </div>
                <hr/>
                 <div className="about-achievement">
                    <h2>Pursuing BTECH</h2>
                    <p>Kiet Group Of Instituions</p>
                </div>
                <hr/>
            </div>
        </div>
    )

}
export default About