import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    let {name,price,description,features}=pricing
    return (
        <div className='flex flex-col border-2 rounded-2xl m-4 p-4 bg-sky-300'>
            {/* card header */}
            <div>
                <h1 className='text-5xl'> name: {name}</h1>
                <h1 className='text-2xl'> Price: {price}</h1>
            </div>
            {/* card body */}
            <div className=' flex-1 p-2 bg-sky-200 rounded-2xl mt-4'>
                 <p>{description}</p>
                 {
                    features.map((feature,index)=> <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                 }
            </div>
            <button className="btn w-full my-2 bg-black text-white">Subscribe</button>
        </div>
    );
};

export default PricingCard;