import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../Utils/constants'
import useOnlineStatus from '../Utils/useOnlineStatus'

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  const onlinestatus = useOnlineStatus()

  return (
    <div className='bg-orange-200'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link to='/'><img className='w-50' src={LOGO_URL} alt='logo' /></Link>
        </div>
        <div className='nav-items'>
          <ul className='flex items-center gap-10 p-3'>
            <li>Online Status: {onlinestatus ? "🟢" : "🔴"}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <button className='bg-green-200 px-5 py-2 rounded-lg font-bold' onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header