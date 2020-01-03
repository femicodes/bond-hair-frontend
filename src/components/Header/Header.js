import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CartDrawer from '../CartDrawer';
import Logo from '../res/main-logo.svg';
import Circles from '../res/3-circles.svg';
import SearchIcon from '../res/search-icon.svg';
import HeartIcon from '../res/heart-icon.svg';
import CartIcon from '../res/cart-icon.svg';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <Fragment>
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
          <img src={CartIcon} alt='cart icon' onClick={toggleDrawer} />
        </div>
      </div>
      <CartDrawer isOpen={isOpen} setOpen={setIsOpen} />
    </Fragment>
  );
};

export default Header;
