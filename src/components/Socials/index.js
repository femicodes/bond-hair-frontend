import React from 'react';
import SocialImage1 from '../res/social_image_1.svg';
import SocialImage2 from '../res/social_image_2.svg';
import SocialImage3 from '../res/social_image_3.svg';
import SocialImage4 from '../res/social_image_4.svg';
import Facebook from '../res/facebook.svg';
import Twitter from '../res/twitter.svg';
import Instagram from '../res/instagram.svg';
import Flutterwave from '../res/flutterwave.svg';
import Line from '../res/line.svg';
import './index.scss';

const Socials = () => {
  return (
    <div className='parent_socials'>
      <hr />
      <p className='social_follow'>Follow us on our socials</p>
      <div className='social_images'>
        <img src={SocialImage1} alt='socialImage' />
        <img src={SocialImage2} alt='socialImage' />
        <img src={SocialImage3} alt='socialImage' />
        <img src={SocialImage4} alt='socialImage' />
      </div>
      <div className='social_medias'>
        <img src={Facebook} alt='socialImage' />
        <img src={Twitter} alt='socialImage' />
        <img src={Instagram} alt='socialImage' />
      </div>
      <div className='social_shipping'>
        <div className='free_shipping boxes'>
          <p className='return_header'>Free shipping</p>
          <p className='sub_header'>On all orders over $75.00</p>
        </div>
        <img src={Line} alt='line' />
        <div className='free_return boxes'>
          <p className='return_header'>Free return</p>
          <p className='sub_header'>30 days money back guarntee</p>
        </div>
        <img src={Line} alt='line' />
        <div className='free_payment boxes'>
          <p className='return_header'>Secured payment</p>
          <img src={Flutterwave} alt='payment' />
        </div>
      </div>
      <div className='social_newsletter'>
        <p>Subscribe to our newsletter to receive news on update.</p>
        <div className='subscription'>
          <input type='email' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
