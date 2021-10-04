import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    let history = useHistory()
    const handleback = () =>{
        history.push('./home')
    }
    return (
        <div>
            
            <div className='mb-5 mt-5'>
                <img src="./image/404.jpg" alt="" />
            </div>
            <div className='mb-5 '>
            <Button onClick={handleback} variant="success">Back in Home</Button>{' '}
            </div>
        </div>
    );
};

export default NotFound;