import React from 'react';
import {  Link } from 'react-router-dom'
import '../styles/nav.css';
import cartIcon from '../images/carts.png';

const Nav = () => {

  return (
    <div className="nav">
      <div className='siteDetails'>
      <Link to={`${process.env.PUBLIC_URL}/`} className='siteName'>Kovi <span>Designs</span></Link>
      <div className='siteSlogan'>
        <p>Modern furniture</p>
        <p>for home & office</p>
      </div>
      </div>
      <div className='comms'>
        <Link className='navLink' to={ `${process.env.PUBLIC_URL}/`}>Home</Link>
        <Link className='navLink'>About</Link>
        <Link className='navLink'>Contact</Link>
        <Link className='navLink'><img className='cartIcon' alt='' src={cartIcon} ></img>10</Link>
      </div>
    </div>
  )

}

export default Nav;