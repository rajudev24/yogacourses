import React from 'react';
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <div className='courses-hero'>
                <img src="./image/courses.jpg" alt="" />
            </div>
            <div className='mt-5'>
                <h2>All Courses</h2>
            </div>
            <div className='courses mt-5  mb-5'>
                <div className='course-detail'>
                    <img src="./image/course-1.jpg" alt="" />
                    <h4>Ashtanga Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-2.jpg" alt="" />
                    <h4>Bikram Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-3.jpg" alt="" />
                    <h4>Hatha Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-4.jpg" alt="" />
                    <h4>Iyengar Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-5.jpg" alt="" />
                    <h4>Jivamukti Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-6.jpg" alt="" />
                    <h4>Kundalini Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-7.jpg" alt="" />
                    <h4>Prenatal Yoga</h4>
                </div>
                <div className='course-detail'>
                    <img src="./image/course-8.jpg" alt="" />
                    <h4>Meditation</h4>
                </div>
            </div>
        </div>
    );
};

export default Courses;