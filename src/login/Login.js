import React from 'react'
import './Login.css'
function Login() {
    const register =() =>{};
    const loginToApp = () => {};
    return (
        <div className='login'>
            <img src="https://clipart-best.com/img/linkedIn/linkedIn-clip-art-10.png" alt="img logo" />
            <form>
                <input placeholder='Full name (required if registering)' type="text" />
                <input placeholder='Profile pic URL (optional)' type="text" />
                <input placeholder= 'Email' type="email" />
                <input  placeholder= 'Password' type="password" />
                <button onClick={loginToApp}> Sign In</button>
            </form>
        <p>
            Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>

        </div>
    )
}

export default Login
