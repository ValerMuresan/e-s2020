import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }
    handleChange = event  => {
        const { value, name } = event.target; 
        this.setState({ [name]: value })
    }

    render() {
        return(
        <div className='sign-in'>
            <h2> I have already an account</h2>
            <span>Sign in with your email an password</span>
            <form onSubmit={this.handleSubmit}> 
                <FormInput 
                type='email' 
                name='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='Email'
                required />
                <FormInput 
                type='password' 
                name='password' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='Password'
                required />
                <div className='buttons'> 
                <CustomButton type='submit'>Sign In</CustomButton> 
                <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                    Sign In With Google </CustomButton> 
                </div>
            </form>
        </div>
        )
    }
}
export default SignIn;