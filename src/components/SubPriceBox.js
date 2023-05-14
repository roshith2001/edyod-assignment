import React from 'react';
import Tick from './Assets/tick.svg'

const SubPriceBox = ({index, month, perMonth, total, recommended, expired, isChecked, onClick, onChange}) => {

    return(
        <div className={`flex justify-between items-center 
            mx-4 border-2 p-1 my-2 rounded-[4px] relative
              ${isChecked ? 'bg-success2 border-success' : 'border-text3'}
             ${expired ? 'bg-disabled border-text3 opacity-60 cursor-not-allowed' : 'cursor-pointer'}
             `} onClick={expired ? null : onClick}>
            <div className='flex items-center'>
            <div
            className={`flex justify-center items-center text-text4 p-[2px] w-4 h-4 border-[1px] mx-2 ${isChecked ? 'bg-success border-success' : 'border-text3'} rounded-full`}>
                {isChecked ? <img src={Tick} alt="tick"/> : ''}
            </div>
            <input type='radio' id={`radioButton-${index}`}
            name='subscription-plan' value={total} 
            className={`w-5 h-5 border mr-2 text-text2
            {expired ? 'cursor-not-allowed':''} hidden`} 
            checked={recommended ? true : isChecked}
            disabled={expired} onChange={onChange} 
            defaultChecked
           />
            
                <label htmlFor={`radioButton-${index}`}
                className='font-semibold text-[16px]'>
                    {month} Months Subscription 
                </label>
            </div>
            <div className='text-right  text-text2'>
                <div>
                    <p className='inline-block text-[12px]'
                    
                    >Total</p>&nbsp;
                    <p className='inline-block text-[16px]
                        font-semibold
                    '>₹{total}</p>
                </div>
                <div>
                    <p className='inline-block text-[12px]'>₹{perMonth}</p>
                    <p className='inline-block text-[10px]
                        text-text3
                    '> &nbsp;/mo</p>
                </div>
            </div>
            {recommended ? <div className='absolute top-0 left-6 bg-success
                text-[10px] px-3 rounded-b-[4px] text-text4'>Recommended</div> : ''}
            {expired ? <div className='absolute top-0 left-6 bg-alertText
            text-[10px] px-3 rounded-b-[4px] text-text4'>Offer Expired</div> : ''}
        </div>
    );
}

export default SubPriceBox; 