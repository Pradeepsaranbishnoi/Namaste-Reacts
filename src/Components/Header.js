import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../Utils/constants'
import useOnlineStatus from '../Utils/useOnlineStatus'

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  const onlinestatus = useOnlineStatus()

  return (
    <div className='header'>
      <div>
      <Link to='/'><img className='logo' src={LOGO_URL} alt='logo' /></Link>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlinestatus ? "🟢" : "🔴"}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-us'>About Us</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
          <button onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header