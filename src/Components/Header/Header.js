import React, { useState } from 'react'
import { LOGO_URL } from '../../Utils/constants'

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className='header'>
      <div>
        <img className='logo' src={LOGO_URL} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header