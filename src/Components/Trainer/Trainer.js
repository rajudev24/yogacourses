import React from 'react';
import './Trainer.css'

const Trainer = (props) => {
    console.log(props)
    const {fullName, img, role} = props.trainer;
    return (
        <div className='trainer-container'>
            <img src={img} alt="" />
            <div className='trainer-deatils'>
            <h5>Trainer Name: {fullName} </h5>
            <p>Expart: {role} </p>
            </div>
        </div>
    );
};

export default Trainer;