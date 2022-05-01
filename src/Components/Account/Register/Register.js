import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from '../../../firebase.init';
import "./Register.css"
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Loading from '../../Loading/Loading';
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [accountErr, setAccountErr] = useState('')


    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const registerEmail = event => {
        // register
        event.preventDefault();
        const cPassword = event.target.cPassword.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password !== cPassword) {
            setAccountErr("Password Doesnt match Confirm Password")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    if (user) {
                        toast("We have sended a email verification.")
                    }
                    sendEmailVerification()
                    navigate(from, { replace: true })

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setAccountErr(errorMessage);
                  
                });
        }
    }
    if (sending) {
        return <Loading></Loading>
    }
    return (
        <div className="w-50 my-5 mx-auto">
            <Form onSubmit={registerEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="" type="email" name="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cPassword" required placeholder="Confirm Password" />
                </Form.Group>
                <p className="text-danger font-bold">{accountErr}</p>
                <p>Already Have a account? <Link to="/login">Login!</Link></p>
                <Button className="w-100" variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;