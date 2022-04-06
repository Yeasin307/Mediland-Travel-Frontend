import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="w-50 mt-5">
                <h3 className='text-center'>Please Registration</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link className='text-decoration-none' to="/">
                        <p>Already Registered? Please Login.</p>
                    </Link>
                    <div className='text-center'>
                        <Button className='w-50' variant="primary" type="submit">
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Registration;