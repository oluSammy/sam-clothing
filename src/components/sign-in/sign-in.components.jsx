import React from 'react';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    state={
        email:'',
        password: ''
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '', 
                password: ''})
        }catch(e){
            alert('Unable to signin')
        }
    }

    handleChange =  e =>{
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already hav an account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        type="text" name="email" 
                        value={this.state.email}
                        required 
                        label={'email'}
                    />            

                    <FormInput 
                        handleChange={this.handleChange} 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required 
                        label={'password'}
                    />                    

                    <div className="buttons">
                        <CustomBtn type="submit">Sign In</CustomBtn>                    
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;  