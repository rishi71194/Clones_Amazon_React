import React, { useState } from 'react';
import './css/Login.css';
import {Link} from 'react-router-dom';


function Login() {

    const signIn = (e) => {
        e.preventDefault();


        //firebase login things.....
    }

    const register = (e) => {
        e.preventDefault();


        //firebase login things.....
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to="/">
                <div>
                    <h3 className="logo__text">CLONE</h3>
                    <img 
                        className='login__logo' 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                        alt='amazon_logo' 
                    />
                </div>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter your email'/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter Password'/> 

                    <button type="submit" onClick={signIn} className='login__signInBtn'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to CLONE Amazon's Conditions of No-Use & Why-Sell? Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice all of which we never bothered to make and were just wasting your time.
                </p>

                <button onClick={register} className='login__registerBtn'>Create your Amazon Account</button>
            </div> 
        </div>
    )
}

export default Login;
