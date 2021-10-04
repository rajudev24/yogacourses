import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div>
                    <h2>Moon Yoga</h2>
                    <p>Happiness is a decision, <br />
                     not a destination. Realize it with us!</p>
                </div>
                <div>
                    <h2>Contact Info</h2>
                    <div>
                    <i class="fas fa-location-arrow"></i> <span>232/G.E.C, Chttagong, Bangladesh</span> <br />
                    <i class="fas fa-phone-square-alt"></i> <span>+880181292822</span> <br />
                    <i class="fas fa-envelope"></i> <span>Email: moonyoga@webamil.com</span>
                    </div>
                </div>
                <div>
                    <h2>Follow Us</h2>
                    <div className='social-profile '>
                    <i class="fab fa-facebook fa-2x ms-2"></i>
                    <i class="fab fa-instagram-square fa-2x ms-2"></i>
                    <i class="fab fa-twitter-square fa-2x ms-2"></i>
                    <i class="fab fa-youtube fa-2x ms-2"></i>
                    </div>
                </div>

            </div>

            <i class="far fa-copyright"></i> <span className='mb-0'>All Rights Reserved by Moon Yoga</span> 

        </div>
    );
};

export default Footer;