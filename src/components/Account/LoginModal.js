import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGooglePlusG, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import commerce from '../../commerceApi';

const leftPannel="";
const rightPannel = 'right-panel-active';

const LoginModal = () => {
    const navigate = useNavigate();
    const [activePannel, setActivePannel] = useState(leftPannel);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleModalClose = (e) =>{
        if(e.target.id==='login-modal'){
            navigate(-1)
        }
    }
    const signInHandler = () => {

    }
    useEffect(function(){
        commerce.customer.login("indranil2k316@gmail.com","https://indra-ecom-react.netlify.app")
        .then(token=>{
            console.log(token)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
    <div className='account-login'>
        <div id='login-modal' className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]" onClick={handleModalClose}>
            <div className={`container ${activePannel}`} id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <Link to="/" className="social"><FontAwesomeIcon icon={faFacebookF}/></Link>
                            <Link to="/" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                            <Link to="/" className="social"><FontAwesomeIcon icon={faTwitter}/></Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={signInHandler}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <Link to="/" className="social"><FontAwesomeIcon icon={faFacebookF}/></Link>
                            <Link to="/" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                            <Link to="/" className="social"><FontAwesomeIcon icon={faTwitter}/></Link>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" value={email} onChange={setEmail}/>
                        <input type="password" placeholder="Password" name='password' value={password} onChange={setPassword}/>
                        <Link to="/">Forgot your password?</Link>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome back, valued customer!</h1>
                            <p>Stay connected with us by logging in using your personal information. Enter your credentials below to access your account and enjoy a seamless shopping experience.</p>
                            <button className="ghost" id="signIn" onClick={()=>{setActivePannel(leftPannel)}}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome, Shopper!</h1>
                            <p>Create your account and embark on an exciting shopping journey with us. Fill in your personal details below to get started.</p>
                            <button className="ghost" id="signUp" onClick={()=>{setActivePannel(rightPannel)}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoginModal;

