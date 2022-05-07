import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from '../../../firebase.init';
import "./Register.css"
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [accountErr, setAccountErr] = useState('')
    const emailRef = useRef('')
    const cPasswordRef = useRef('')
    const passwordRef = useRef('')

    const registerEmail = event => {
        // register
        event.preventDefault();
        const email = emailRef.current.value;;
        const password = passwordRef.current.value;
        const cPassword = cPasswordRef.current.value;
        console.log(email, password, cPassword);
        if (password !== cPassword) {
            setAccountErr("Password Doesnt match Confirm Password")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    event.preventDefault();

                    if (user) {
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                toast("We have sended a email verification.")
                                navigate(from, { replace: true })

                            });
                    }

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setAccountErr(errorMessage);
                });
        }
    }

    return (
        <div className="w-50 my-5 mx-auto">
            <Form onSubmit={registerEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" autoComplete="none" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name="password" autoComplete="none" required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={cPasswordRef} type="password" name="cPassword" autoComplete="none" required placeholder="Confirm Password" />
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