import React from 'react'
import "./HeroSection.css"
function HeroSection() {
    return (
        <section className='hero-container'>
            <div className='hero-container-color ' style={{ zIndex: "-1" }}>
                <div className='hero-container-width-control  d-flex align-items-center '>
                    <div>
                        <div className='text-light '>
                            <h3 className='text-light '>I create websites that last and perform</h3>
                        </div>
                        <div className='text-light mt-4'>
                            <h3 className='text-light hero-h3 '>Do you sell online or want to get started?</h3>

                            <div className="hero-box">
                                <p className='text-light hero-p '>We specialize in building Shopify e-commerce websites.</p>
                                <div className="d-flex gap-3 align-items-center">
                                    <p className='text-warning m-0'>Build your store <i class="bi bi-arrow-right"></i></p>
                                </div>
                            </div>

                        </div>
                        <div className='text-light mt-4'>
                            <h3 className='text-light hero-h3'>Do you sell online or want to get started?</h3>

                            <div className="hero-box">
                                <p className='text-light hero-p'>We can create a site to present your brand and company info to make you proud.</p>
                                <div className="d-flex gap-3 align-items-center">
                                    <p className='text-warning m-0'>Create a website </p><i class="bi bi-arrow-right text-warning"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection