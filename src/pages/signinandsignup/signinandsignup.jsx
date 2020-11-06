import React from 'react';
import './signinandsignup.scss';
import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx';

const SignInAndSignUp = () => (
    <div className='signinandsignup'> 
    <SignIn />
    <SignUp />
    </div>
);
export default SignInAndSignUp;