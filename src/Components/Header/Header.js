import React from 'react'
import { LOGO_URL } from '../../Utils/constants'

const Header = () =>{
  return (
    <div className='header'>
        <div>
            <img className='logo' src={LOGO_URL} alt='logo'/>
        </div>  
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>    
    </div>
  )
}

export default Header