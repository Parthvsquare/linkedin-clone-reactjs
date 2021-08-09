import {useState} from 'react'
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from '../features/userSlice'


function Login() {
    const dispatch = useDispatch()
    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register =(e) =>{
        if(!name) {
            return alert('Please enter a full name!');

        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
        .then(() =>{
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }))
                })
            }
        ).catch(error => alert(error))
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    return (
        <div className='login'>
            <img src="https://clipart-best.com/img/linkedIn/linkedIn-clip-art-10.png" alt="img logo" />
            <form>
                <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />
                <input value= {email} onChange={(e) => setEmail(e.target.value)} placeholder= 'Email' type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}  placeholder= 'Password' type="password" />
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
