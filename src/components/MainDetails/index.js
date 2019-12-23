import React, { Fragment } from 'react';
import Select from 'react-select';
import Reviews from '../Reviews';
import Footer from '../Footer';
import ProductCard from '../ProductCard';
import CardImage from '../res/popular-product.svg';
import Heart from '../res/detail-hearts.svg';
import Detail from '../res/Rectangle 43.svg';
import gallery1 from '../res/sub-detail.svg';
import gallery2 from '../res/sub-detail2.svg';
import ruler from '../res/ruler.svg';
import check from '../res/check-mark.svg';
import star from '../res/star.svg';
import './index.scss';

const closureOptions = [
  { value: 'frontal', label: 'Frontal' },
  { value: 'closure', label: 'Closure' },
];

const lengthOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
]

const selectStyles = {
  control: styles => ({
    ...styles,
    border: '1px solid #000000',
    width: '230px',
    borderRadius: '20px',
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 229, 0.3)',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '0.05em',
    outline: 'none',
    color: '#000000',
    boxShadow: '0 !important',
    '&:hover': {
      border: '1px solid #000000',
    }
  }),
};

const itemStyles = {
  control: styles => ({
    ...styles,
    border: '1px solid #000000',
    width: '101px',
    borderRadius: '20px',
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 229, 0.3)',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '0.05em',
    outline: 'none',
    color: '#000000',
    boxShadow: '0 !important',
    '&:hover': {
      border: '1px solid #000000',
    }
  }),
};

const MainDetails = () => {
  return (
    <Fragment>
      <div className='parent_main__details'>
        <div className='main_description'>
          <div className='main_description__reviews'>
            <div className='stars'>
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
            </div>
            <p>Read all 700 reviews</p>
          </div>
          <p className='main_description__collection'>Black/Paruvian</p>
          <div className='main_description__title'>
            <div>Paruvian hair frontal wig <br /> 300g</div>
            <img src={Heart} alt='hearts' />
          </div>
          <p className='main_description__price'>$55</p>
          <div className='main_description__body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nullam nunc id tristique pretiumv Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             nunc id tristique pretium joer
           </p>
          </div>
          <div className='main_description__guide'>
            <img src={ruler} alt='guide' />
            <p>Size Guide</p>
          </div>
          <div className='main_description__dropdown'>
            <Select placeholder='Hair Closure' styles={selectStyles} options={closureOptions} />
            <Select placeholder='Hair length/inch' styles={selectStyles} options={lengthOptions} />
          </div>
          <div className='main_description__cart'>
            <Select placeholder='1' defaultValue='1' styles={itemStyles} options={lengthOptions} />
            <button>Add to cart</button>
          </div>
          <div className='main_description__quality'>
            <div className='sub_quality'>
              <img src={check} alt='check' /><p>Free shipping for orders above $100</p>
            </div>
            <div className='sub_quality'>
              <img src={check} alt='check' /><p>Secured Payment</p>
            </div>
          </div>
        </div>
        <div className='gallery'>
          <img className='sub_main' src={Detail} alt='detail_pic' />
          <div className='sub_photos'>
            <img src={gallery1} alt='detail_pic' />
            <img src={gallery1} alt='detail_pic' />
            <img src={gallery1} alt='detail_pic' />
            <img src={gallery2} alt='detail_pic' />
          </div>
        </div>
      </div>
      <div className='parent_product__details'>
        <div className='sub_product__details'>
          <p>Product Details</p>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam nunc id tristique pretiumv Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc id tristique pretium joer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc id tristique pretiumv Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>
        <div className='sub_product__specifications'>
          <p>Specifications</p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit. Nullam nunc id tristique pretiumv</li>
            <li>consectetur adipiscing elit. Nullam tetur</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
      <div className='review_layout'>
        <p className='review_header'>Reviews</p>
        <div className='main_review__layouts'>
          <Reviews />
          <Reviews />
          <Reviews />
        </div>
      </div>
      <div className='similar_products'>
        <p className='similar_products__header'>Similar products</p>
        <div className='similar_products__layout'>
          <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
          <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
          <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainDetails;
