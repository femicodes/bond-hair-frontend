import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import SummaryCard from '../components/SummaryCard';
import './Cart.scss'

const Cart = () => {
  return (
    <Fragment>
      <Header />
      <div className='checkout_page'>
        <div className='checkout_details'>
          <p>Checkout details</p>
          <div className='checkout_details__section'>
            <label className='checkout_details__sub'>Personal details</label>
            <form className='checkout_form'>
              <input className='input_fields' type='email' placeholder='Email' />
              <input className='input_fields' type='email' placeholder='Confirm email' />
              <input className='input_fields' type='text' placeholder='Full name' />
              <input className='input_fields' type='text' placeholder='Phone number' />
            </form>

            <label className='checkout_details__sub'>Delivery details</label>
            <form className='checkout_form'>
              <input className='input_fields delivery_address' type='text' placeholder='Address' />
              <input className='input_fields' type='text' placeholder='Further information (Optional)' />
              <input className='input_fields' type='text' placeholder='Town' />
            </form>
            <button className='checkout_details__button'>Continue to payment</button>
          </div>
        </div>
        <div className='order_summary'>
          <p className='order_summary__header'>Order Summary</p>
          <div className='order_summary__card'>
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
          </div>
          <div className='order_summary__total'>
            <p>Total</p>
            <p>$120</p>
          </div>
          <p className='vat'>Including VAT</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;