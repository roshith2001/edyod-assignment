import React from 'react';
import limitedOffer from './Assets/limited.svg';

const FeeTotalSection = ({ BasicFees, TotalValue }) => {
  const Discount = BasicFees - TotalValue;

  return (
    <div className="mx-4 py-4 border-t-2 text-[16px] border-text3">
      <div className="flex justify-between px-4 items-center">
        <p>Subscription Fee</p>
        <p className="font-medium">₹ {BasicFees}</p>
      </div>
      <div>
        <div
          className="border-2 my-2 text-alertText rounded-[4px] py-2 px-4"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%, rgba(254, 193, 99, 0.2) 100%)',
          }}
        >
          <div className="w-full flex justify-between font-semibold items-center">
            <p className="">Limited time offer</p>
            <p>₹ {Discount}</p>
          </div>

          <div className="flex items-center">
            <img src={limitedOffer} alt="limited time" className="w-6 mr-1" />
            <p className="text-[14px]">Offer valid till 25th March 2023 </p>
          </div>
        </div>
      </div>
      <div className="flex px-4 justify-between items-center">
        <p>
          Total <span>(Incl. of 18% GST)</span>
        </p>
        <p className="font-bold">₹ {TotalValue}</p>
      </div>
    </div>
  );
};

export default FeeTotalSection;
