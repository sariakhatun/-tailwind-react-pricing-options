import { CircleCheck, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 mt-4'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeatures;