import React from 'react';
import Image from '../res/order-summary.svg';
import CartHeart from '../res/cart-heart.svg';
import TrashIcon from '../res/trash-icon.svg';
import './index.scss';

const SummaryCard = ({ showActions }) => {
  return (
    <div className='parent_summary__card'>
      <img src={Image} alt='summary_photo' />
      <div className='main__details'>
        <p className='order_summary__heading'>Paruvian hair frontal wig 300g</p>
        <p className='order_summary__code'>Product code 132as1324s</p>
        <div className='order_summary__item'>
          <p>18 Inch</p>
          <p>Hair Closure</p>
          <p>1</p>
        </div>
        <div className='order_summary__bottom'>
          {
            showActions === true ? (
            <div className='order_summary__actions'>
            <img src={CartHeart} alt='cart-heart' />
            <img src={TrashIcon} alt='trash-icon' />
          </div>
          )
           : <div></div>
        }
          <p className='order_summary__price'>$20</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
