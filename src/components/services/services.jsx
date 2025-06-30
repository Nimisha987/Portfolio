import React from 'react'
import './services.css'
const Services=()=>{
    return (
        <div id = "services" className='services'>
            <div className="services-title">
                <h1>My Services</h1>

            </div>
            <div className="services-container">
                <div className="service">
                    <h3>Web Design</h3>
                    <p>I craft websites that look stunning on all devices — from desktops to smartphones. Using flexible grids, media queries, and modern layouts, I ensure your site is mobile-first, fast-loading, and accessible.</p>
                </div>
                   <div className="service">
                    <h3>Graphic Design</h3>
                    <p>I design social media graphics, posters, brochures, and more — tailored to your brand. Whether for digital or print, I bring creativity and clarity to every visual.</p>
                </div>




            </div>

        </div>
    )
}
export default Services