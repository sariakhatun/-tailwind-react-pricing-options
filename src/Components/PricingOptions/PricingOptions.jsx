import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';
const PricingOptions = ({pricingPromise}) => {
    let pricingData=use(pricingPromise)
    //console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing=> <DaisyPricingCard pricing={pricing}></DaisyPricingCard> )
                }
            </div>
        </div>
    );
};

export default PricingOptions;