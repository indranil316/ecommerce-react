import React from 'react'

function Login() {
  return (
    <div className='account-login fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]'>
        <div class="login-register">
            <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle active" id="toggle-login">Log in</button>
                    <button type="button" class="toggle" id="toggle-register">Register</button>
                </div>
                <form class="input-group" id="login">
                    <input type="email" class="input-field" id="login-email" placeholder="Email" required/>
                    <input type="password" class="input-field" id="login-pass" placeholder="Enter password" required/>
                    <p class="check-box"><i class='bx bx-error-alt'></i></p><button id="forgot">Forgot password</button>
                    <button type="submit" class="submit-btn" id="login-sub-btn">Log In</button>
                </form>
                <form class="input-group" id="register">
                    <input type="text" class="input-field" id="reg-name" placeholder="Enter name" required/>
                    <input type="email" class="input-field" id="reg-email" placeholder="Enter Email" required/>
                    <input type="password" class="input-field" id="reg-pass" placeholder="Enter a password" required/>
                    <input type="checkbox" class="check-box" id="check" required/><span>I agree to the terms &
                        conditions</span>
                    <button type="submit" class="submit-btn" id="reg-sub-btn">Register</button>
                </form>
                <form class="input-group" id="forgot-pass">
                    <input type="email" class="input-field" id="forgot-email" placeholder="Enter Email" required/>
                    <button type="submit" class="submit-btn" id="forgot-sub-btn">Send reset link</button>
                </form>
            </div>
        </div>
    </div>
 
  )
}

export default Login