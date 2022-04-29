import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from '../../../firebase.init';
import "./Register.css"
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const registerEmail = event => {
        event.preventDefault();
        const cPassword = event.target.cPassword.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password !== cPassword) {
            console.log("password dindt work")
            return <h2>Confirm password Doesnt Match Password</h2>
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    sendEmailVerification()
                    alert("We have sended a email verification.")
                    if (user.providerData[0]?.providerId === 'password' && user.emailVerified) {

                        navigate(from, { replace: true });
                    }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ..
                });
        }
    }
    return (
        <div className="w-50 my-5 mx-auto">
            <Form onSubmit={registerEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="" type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cPassword" placeholder="Confirm Password" />
                </Form.Group>
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