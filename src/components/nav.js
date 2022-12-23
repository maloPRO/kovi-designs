import React from 'react';
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
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  )

}

export default Nav;