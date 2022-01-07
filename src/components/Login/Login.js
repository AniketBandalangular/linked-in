import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/counter/userSlice'
import './login.css'

function Login() {
    const auth =getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const dispatch = useDispatch()
    const loginToApp =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password).then(
            userCred=>{
                dispatch(
                    login({
                        email:userCred.user.email,
                        uid:userCred.user.displayName,
                        displayName: userCred.user.displayName,
                        photoURL:userCred.user.photoURL
                    })
                )
            }
        ).catch(
            err=>alert(err.message)
            );
    }
    const register =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCred =>{
            console.log(userCred.user)
            updateProfile(userCred.user,{
                displayName: name,
                photoURL: profilePicture
            }).then(
                ()=>{
                    dispatch(
                        login(
                            {
                                email:userCred.user.email,
                                uid:userCred.user.displayName,
                                displayName: name,
                                photoURL:profilePicture
                            }
                        )
                    )
                }
            ).catch(error => alert(error.message))
        })
        .catch(error=> alert(error.message))
    }
    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="linked in logo"/>
            <form onSubmit={loginToApp}>
                <input type="text" placeholder="full Name" value={name} onChange={(e)=>setName(e.target.value)}  />
                <input type="text" placeholder="Profile Picture URL" value={profilePicture} onChange={(e)=>setProfilePicture(e.target.value)}  />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
            <p>Not a Member ?
                <span className='login_register' onClick={register}> Register Now</span>
                </p>
        </div>
    )
}

export default Login
