import axios from 'axios';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
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

    const [err, setErr] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // Login
    const loginWithEmail = async e => {
        const email = emailRef.current.value;;
        const pass = passRef.current.value;
        e.preventDefault()
        await signInWithEmailAndPassword(email, pass);
        const { data } = await axios.post('https://morning-thicket-30795.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken)
        toast("Successfully Logged In")
        navigate(from, { replace: true });
    }
    if (user) {

    }

    if (loading) {
        return <Loading></Loading>
    }
    // Forgot Password
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("We have sended you a password reset Email")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorMessage)
            });
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
                    <Form.Control ref={passRef} type="password" required name="password" placeholder="Password" />
                </Form.Group>

                <p>Don't Have a account? <Link to="/register">Create one now!</Link></p>
                <p>Forgot Your Password? <button onClick={handleForgetPassword}>Click me</button></p>
                {
                    error ? <p className="text-danger fw-bold">{error.message}</p> : <p className="text-danger fw-bold"></p>
                }
                {
                    err ? <p className="text-danger fw-bold">{err}</p> : <p className="text-danger fw-bold"></p>
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