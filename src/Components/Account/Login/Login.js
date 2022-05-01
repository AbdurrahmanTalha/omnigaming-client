import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const loginWithEmail = async e => {
        const email = emailRef.current.value;;
        const pass = passRef.current.value;
        e.preventDefault()
        await signInWithEmailAndPassword(email, pass);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }
    if(user) {
        toast("Successfully Logged In")
    }
    return (
        <div className="w-50 mx-auto my-5">
            <Form onSubmit={loginWithEmail} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="" type="email" required ref={emailRef} name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" required name="password" placeholder="Password"  />
                </Form.Group>

                <p>Don't Have a account? <Link to="/register">Create one now!</Link></p>
                {
                    error ? <p className="text-danger fw-bold">{error.message}</p> : <p className="text-danger fw-bold"></p>
                }
                <Button className="w-100" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;