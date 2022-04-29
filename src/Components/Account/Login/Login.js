import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const loginWithEmail = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }
    if (user) {

        navigate(from, { replace: true });
    }
    return (
        <div className="w-50 mx-auto my-5">
            <Form onSubmit={loginWithEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="" type="email" onBlur={(e) => setEmail(e.target.value)} name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;