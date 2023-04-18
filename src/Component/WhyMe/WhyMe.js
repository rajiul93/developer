import React from 'react'
import "./WhyMe.css"

function WhyMe() {
  return (
    <div className='bg-white'>
    <div className='whyMe '>
        <div className='whyMe-child py-5'>
           
            <div className='whyMe-1 mb-4 '>
                <img src="https://www.imjuwel.com/wp-content/uploads/2023/03/Md-Juwel-Freelance-website-developer.jpg" className='img' alt="" />
            </div>
            
            <div className='whyMe-2 '>
                <h2 className='fs-4'>Why me</h2>
                <p>You should take my website development and design service because I am an experienced website developer and designer with a track record of delivering high-quality, visually stunning websites that engage users and drive conversions.
                    <br /><br />

                    I am passionate about web design and development, and I take pride in creating websites that are both aesthetically pleasing and highly functional. I stay up-to-date with the latest web design trends and technologies, ensuring that your website is optimized for speed, security, and mobile responsiveness.
                    <br /><br />
                    I offer a range of website development and design services, including custom website design, website migration, website management, e-commerce solutions, and more. Whether you need a simple brochure website or a complex e-commerce platform, I can create a website that’s tailored to your specific requirements.</p>
                <button className="button-1">Contact me</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default WhyMe