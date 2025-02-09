import React from 'react'
import "../components/header.css"
const Header = () => {
  return (
    <nav className='navbar'>
        <div class="logo">
      {/* <img src="logo.png" alt="Hospital Logo"/> */}

      <h1>Hosp</h1>
    </div>
         <div class="signup">
      <a href="#" class="signup-btn">Sign Up</a>
    </div>
    </nav>
  )
}

export default Header