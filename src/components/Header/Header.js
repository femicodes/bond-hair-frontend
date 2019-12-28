import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../res/main-logo.svg';
import Circles from '../res/3-circles.svg';
import SearchIcon from '../res/search-icon.svg';
import HeartIcon from '../res/heart-icon.svg';
import CartIcon from '../res/cart-icon.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className='parent_header'>
      <div className='header_circles'>
        <img src={Circles} alt='3 circles' />
      </div>
      <div className='header_logo'>
        <Link to='/'>
          <img src={Logo} alt='main logo' />
        </Link>
      </div>
      <div className='header_icons'>
        <img src={SearchIcon} alt='search icon' />
        <img src={HeartIcon} alt='heart icon' />
        <Link to='/cart'>
          <img src={CartIcon} alt='cart icon' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
