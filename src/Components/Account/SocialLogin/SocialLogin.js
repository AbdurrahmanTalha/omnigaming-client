import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import "./SocialLogin.css"
const SocialLogin = () => {
    const signInWithGoogle = event => {
        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle //(auth);
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='or-border w-50'></div>
                <p className='mt-2 px-2 mx-3' style={{ color: '#95a0a7' }}>or</p>
                <div style={{ height: '1px' }} className='or-border w-50'></div>
            </div>
            {/* {errorElement} */}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn signin-btn w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src="https://github.com/ProgrammingHero1/genius-car-service-client-deploy-module-69/blob/main/src/images/social/google.png?raw=true" alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;