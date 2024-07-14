import React from 'react'
import "./HeroSection.css"
function HeroSection() {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Elevate your revenue and CX with AI-powered WhatsApp journeys</h1>
                    <p>
                        Combine WhatsApp with the power of Level-3 AI to lower CAC,
                        amplify retention, and deliver exceptional support for your brand.
                    </p>
                </div>
                <button className="hero-button-demo-button">
                    <span>Book a Demo</span>
                    <div className='hero-button-arrow-icons-container'>
                        <span className='hero-button-arrow-icon'>
                            <svg className='hero-button-previous-icon' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 21" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M14.3828 7.82861L17.5078 10.9536M17.5078 10.9536L14.3828 14.0786M17.5078 10.9536L2.50781 10.9536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <svg className='hero-button-next-icon' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 21" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M14.3828 7.82861L17.5078 10.9536M17.5078 10.9536L14.3828 14.0786M17.5078 10.9536L2.50781 10.9536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </button>
            </div>
           <div className='hero-image-container'>
           <img className='hero-image' src="https://cdn.prod.website-files.com/65a7d71f66faf59e3ec83095/6622636b11cee4380f946fcb_D2%20Homepage%20creative-p-1600.webp" alt="demo-image" />
           </div>
        </div>

    )
}

export default HeroSection
