import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='about-hero'>
                <img src="./image/about.jpg" alt="" />
            </div>
            <div className='mt-5 mb-5'>
                <h2>About Us</h2>
            </div>
            <div className='mb-5 border-2 bg-light container p-5'>
                <h3>Happiness is a decision, not a destination. Realize it with us!</h3>
                <p>Yoga studios are a place of learning with a skilled teacher. This includes techniques and adjustments related to proper physical alignment and an opportunity to be inspired by the philosophical teachings of yoga, along with gaining insight from the life experience of your teachers.</p>
            </div>
        </div>
    );
};

export default About;