import React from 'react';
import './Trainers.css'
import { useState, useEffect } from 'react';
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch(`./trainers.JSON`)
            .then(res => res.json())
            .then(data => setTrainers(data))

    }, [])

    return (
        <div>
            <div className='trainer-hero'>
                <img src="./image/trainer.jpg" alt="" />
            </div>
            <div className='mt-5 mb-5'>
                <h2>Our Expart Trainers</h2>
            </div>

            <div className='trainers-container'>
                {
                    trainers.map(trainer => <Trainer
                        key={trainer.id}
                        trainer={trainer}
                    ></Trainer>)

                }
            </div>

        </div>
    );
};

export default Trainers;