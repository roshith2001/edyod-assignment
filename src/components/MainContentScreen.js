import React from 'react';
import PaymentBox from './PaymentBox';
import backgroundImage from './Assets/background.png';
import learningResource from './Assets/learning-resources.svg';
import ads from './Assets/ads.svg';
import scholarship from './Assets/scholorship.svg';
import live from './Assets/live.svg';
import noTime from './Assets/no-time.svg';

const MainContentScreen = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='flex-grow flex flex-col sm:flex-row w-full pt-12' style={backgroundStyle}>
      <div className='w-full sm:w-2/3'>
        <div className='w-full text-text4 flex flex-wrap flex-col items-start justify-center px-12'>
          <div className='mb-12'>
            <p className='font-raleway font-semibold text-4xl leading-relaxed'>
              Access curated courses worth <br />
              ₹ <span className='font-roboto' style={{ textDecoration: 'line-through', textDecorationColor: '#FF0000' }}>18,500</span>&nbsp;
              at just <span className='font-roboto text-primary'>₹ 99</span> per year!
            </p>
          </div>
          <div className='font-roboto text-xl'>
            <div className='w-full flex flex-wrap justify-start items-center font-roboto my-4'>
              <img src={learningResource} alt='learning' className='w-10' />
              <p className='mx-6 tracking-wider'>
                <span className='text-primary'>100+</span> Job relevant courses
              </p>
            </div>
            <div className='w-full flex flex-wrap justify-start items-center font-roboto my-4'>
              <img src={noTime} alt='learning' className='w-10' />
              <p className='mx-6 tracking-wider'>
                <span className='text-primary'>20,000+</span> Hours of content
              </p>
            </div>
            <div className='w-full flex flex-wrap justify-start items-center my-4'>
              <img src={live} alt='learning' className='w-10' />
              <p className='mx-6 tracking-wider'>
                <span className='text-primary'>Exclusive</span> webinar access
              </p>
            </div>
            <div className='w-full flex flex-wrap justify-start items-center font-roboto my-4'>
              <img src={scholarship} alt='learning' className='w-10' />
              <p className='mx-6 tracking-wider'>
                Scholarship worth <span className='text-primary'>₹94,500</span>
              </p>
            </div>
            <div className='w-full flex flex-wrap justify-start items-center font-roboto my-4'>
              <img src={ads} alt='learning' className='w-10' />
              <p className='mx-6 tracking-wider'>
                <span className='text-primary'>Ad Free</span> learning experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full sm:w-1/2 flex justify-center items-start'>
        <PaymentBox paymentData={props.paymentData} />
      </div>
    </div>
  );
}

export default MainContentScreen;
