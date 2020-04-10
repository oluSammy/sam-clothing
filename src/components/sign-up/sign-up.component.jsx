import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import {auth, createUserProfileDoc} from '../../firebase/firebase.utils';

 import './sign-up.styles.scss';

 class SignUp extends React.Component{

    state={
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Passwords Do Not Match');
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(e){
            console.log(e);
        }
    }

    handleChange = (e)=>{
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I Do not Have An Account</h2>
                <span>Sign Up With You Email And Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange= {this.handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange= {this.handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange= {this.handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange= {this.handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
 };

 export default SignUp;