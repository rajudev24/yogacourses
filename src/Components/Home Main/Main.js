
import React from 'react';
import { Card, Col, Row , Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Main.css'

const Main = () => {
    const history = useHistory()
    //handle View More Button
    const handleButton = ()=>{
        history.push('./courses')
    }
    return (
        <div className='main-section container-fluid mb-5'>
            <p className='title'>Our Courses</p>
            <div className='courses-name'>
                <div className='course-details'>

                    <img src="./image/Nature.jpg" alt="" />
                    <h4>Nature Yoga</h4>
                    <p>Nature Yoga provides an opportunity to look at both the “trees” (individual selves) and the “forest” (greater environment) at the same time. Artificially Shaped Bodies</p>
                    <Button onClick= {handleButton} variant="warning">View More Course</Button>{' '}
                </div>
                <div className='course-details'>
                    <img src="./image/Body.jpg" alt="" />
                    <h4>Body Relaxation</h4>
                    <p>Practicing yoga helps in reducing stress and relaxing your body and mind. It also lets you focus on your breathing to help you balance.It will help your many things</p>
                    <Button onClick= {handleButton} variant="warning">View More Course</Button>{' '}
                </div>
                <div className='course-details'>
                    <img src="./image/Meditaion.jpg" alt="" />
                    <h4>Meditation</h4>
                    <p>Meditation is the process of redirecting your thoughts to calm your mind. It may also improve your overall quality of life</p>
                    <Button onClick= {handleButton} variant="warning">View More Course</Button>{' '}
                </div>
                <div className='course-details'>
                    <img src="./image/Asana.jpg" alt="" />
                    <h4>Asana Yoga</h4>
                    <p>An asana is a body posture, originally and still a general term for a sitting meditation pose, and later extended in hatha yoga and modern yoga as exercise.</p>
                    <Button onClick= {handleButton} variant="warning">View More Course</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Main;