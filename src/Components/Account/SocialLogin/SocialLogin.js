import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./SocialLogin.css"
import Loading from '../../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='or-border w-50'></div>
                <p className='mt-2 px-2 mx-3' style={{ color: '#95a0a7' }}>or</p>
                <div style={{ height: '1px' }} className='or-border w-50'></div>
            </div>
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn signin-btn d-block mx-auto my-2 text-center w-100'>
                    <img style={{ width: '30px' }} className="img-fluid" src="https://github.com/ProgrammingHero1/genius-car-service-client-deploy-module-69/blob/main/src/images/social/google.png?raw=true" alt="" />
                    Google Sign In
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;