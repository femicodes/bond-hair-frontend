import React from 'react';
import FooterLogo from '../res/footer_logo.svg';
import './index.scss';

const Footer = () => {
  return (
    <div className='parent_footer'>
      <div className='bond_footer'>
        <img src={FooterLogo} alt='footer_logo' />
        <p className='sub_footer'>© 2019 The Bond Hair.</p>
        <p className='sub_footer'>All Rights Reserved</p>
      </div>
      <div className='about_footer'>
        <p className='footer_header'>About</p>
        <p className='sub_footer'>About us</p>
        <p className='sub_footer'>Contact</p>
      </div>
      <div className='useful_footer'>
        <p className='footer_header'>Useful links</p>
        <p className='sub_footer'>Returns</p>
        <p className='sub_footer'>Support Policy</p>
        <p className='sub_footer'>Size guide</p>
        <p className='sub_footer'>FAQS</p>
      </div>
      <div className='follow_footer'>
        <p className='footer_header'>Follow us on</p>
        <p className='sub_footer'>Twitter</p>
        <p className='sub_footer'>Facebook</p>
        <p className='sub_footer'>Instagram</p>
        <p className='sub_footer'>Youtube</p>
      </div>
    </div>
  );
};

export default Footer;
