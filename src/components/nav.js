import React from 'react';
import {  Link } from 'react-router-dom'
import '../styles/nav.css';

const Nav = () => {

  return (
    <div className="nav">
      <div className='siteDetails'>
      <div className='siteName'>Kovi <span>Designs</span></div>
      <div className='siteSlogan'>
        <p>Modern furniture</p>
        <p>for home & office</p>
      </div>
      </div>
      <div className='comms'>
        <Link className='navLink' to={'/'}>Home</Link>
        <Link className='navLink'>About</Link>
        <Link className='navLink'>Contact</Link>
      </div>
    </div>
  )

}

export default Nav;