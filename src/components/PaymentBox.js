import React, { useState } from 'react';
import SubPriceBox from './SubPriceBox';
import FeeTotalSection from './FeeTotalSection';
import { Button } from '@mui/material';
import razorpay from './Assets/razorpay.svg';

const PaymentBox = (props) => {
  const [totalValue, setTotalValue] = useState('');
  const BasicFees = 18500;
  const [selectedSubPriceBox, setSelectedSubPriceBox] = useState(null);

  const handleSubPriceBoxClick = (index) => {
    setSelectedSubPriceBox(index);
    setTotalValue(props.paymentData[index].total);
  };

  return (
    <div className='bg-text4 w-10/12 flex flex-col items-center justify-center font-roboto rounded-[4px]'>
      <div className='w-full flex text-sm justify-center items-center py-3'>
        <div className='w-1/2 text-center p-3 flex flex-col justify-center items-center'>
          <div className='w-6 h-6 rounded-full font-semibold bg-primary text-text4 flex items-center justify-center'>
            <p>1</p>
          </div>
          <p className='font-normal'>Sign In</p>
        </div>
        <div className='w-1/2 text-center p-3 flex flex-col justify-center items-center'>
          <div className='w-6 h-6 rounded-full font-semibold bg-primary text-text4 flex items-center justify-center'>
            <p>2</p>
          </div>
          <p className='font-normal'>Subscribe</p>
        </div>
      </div>
      <div className='font-semibold text-md'>
        <p>Select your subscription plan</p>
      </div>
      <div className='w-full'>
        <form>
          <div className='my-6'>
            {props.paymentData.map((item, index) => (
                <SubPriceBox
                key={index}
                index={index}
                month={item.months}
                perMonth={item.perMonth}
                total={item.total}
                recommended={item.recommended}
                expired={item.expired}
                isChecked={index === selectedSubPriceBox}
                onClick={() => handleSubPriceBoxClick(index)}
                />
            ))}
          </div>
          <div>
            <FeeTotalSection BasicFees={BasicFees} TotalValue={totalValue} />
          </div>
          <div className='flex justify-around items-center'>
            <Button
              variant='outlined'
              sx={{
                color: '#DE4313',
                borderColor: '#DE4313',
                width: '45%',
              }}
              onClick={() => {setSelectedSubPriceBox(-1)
                setTotalValue(0)}}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              type='submit'
              sx={{
                color: '#FFFFFF',
                backgroundColor: '#47BA68',
                width: '45%',
              }}
            >
              Proceed to pay
            </Button>
          </div>
        </form>
      </div>
      <div className='self-start px-4 py-4'>
        <img src={razorpay} alt='Razor-Pay' className='w-2/3' />
      </div>
    </div>
  );
};

export default PaymentBox;
