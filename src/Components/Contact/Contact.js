import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-hero'>
                <img src="./image/contact.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-lg-around mt-5 mb-5 '>
                <div className='align-items-center'>
                    <h4>Our Conatct</h4>
                    <h2>Get in Touch</h2>
                </div>
                <div className='w-50'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Quary</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;