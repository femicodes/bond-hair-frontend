import React from 'react';
import SummaryCard from '../SummaryCard';
import CartIcon from '../res/cart-icon.svg';
import HeartIcon from '../res/heart-icon.svg';
import CloseCart from '../res/close-cart.svg';
import CartLine from '../res/cart-line.svg';
import './index.scss';

const CartDrawer = ({ isOpen, setOpen }) => {

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className={`drawer__container ${isOpen && "drawer__container--isOpen"}`}>
      <div className='drawer__nav--parent'>
        <div className='drawer__nav--tabs'>
          <div className='drawer__nav--item active_tab'>
            <img src={CartIcon} alt='cart-icon' />
            <p>Shopping cart (2)</p>
          </div>
          <div className='drawer__nav--item inactive_tab'>
            <img src={HeartIcon} alt='heart-icon' />
            <p>Wishlist (0)</p>
          </div>
        </div>
        <div className='drawer__nav--close'>
          <img src={CartLine} alt='cart-line' />
          <img onClick={closeDrawer} className='close--icon' src={CloseCart} alt='close-cart' />
        </div>
      </div>
      <div className='drawer__summary--card'>
        <SummaryCard showActions={true} />
        <SummaryCard showActions={true} />
        <SummaryCard showActions={true} />
        <SummaryCard showActions={true} />
      </div>

      <form className='drawer__coupon--form'>
        <input type='text' placeholder='Enter a promotional code' />
        <div className='drawer__coupon--button'><p>Validate</p></div>
      </form>

      <hr className='drawer__bottom-line' />
      <div className='drawer__process-order'>
        <div className='drawer__total-price'>
          <p>Total</p>
          <p>$120</p>
        </div>
        <p className='drawer__vat'>Including VAT</p>
        <div className='drawer__process-button'>
          <p>Process order</p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
