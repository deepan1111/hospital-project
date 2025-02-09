import React from 'react'
import "../Pages/signupstyle.css"
import Header from '../components/Header'
import SignupImg from "../assets/undraw_with-love_rs1k.png"

const Signup = () => {
  return (
    <div className="s-hero">
        <div className="s-container">
        <Header/>
    <h2>Sign Up</h2>
    <form>
        <div className="s-form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" required/>
        </div>
        <div className="s-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
        </div>
        <div className="s-form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
        </div>
        <button type="submit" className="s-btn-signup">Sign Up</button>
    </form>
    <p className="s-login-link">Already have an account? <a href="#">Login</a></p>
</div>

<img className='s-img' src={SignupImg} alt="" />
    </div>
    
  )
}

export default Signup