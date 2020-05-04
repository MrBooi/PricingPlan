import React, { useContext } from 'react';
import PricingPlanCard from './pricingPlanCard';
import { GlobalContext } from '../context/GlobalState';

const PricingPlanList = () => {
    const { priceList, fetchPriceList } = useContext(GlobalContext);
    console.log(fetchPriceList);
    return (
        <div className="pricing py-4">
            <div className="row">
                {
                    priceList.map(val => (
                        <PricingPlanCard key={val.id} data={val} />
                    ))
                }
            </div>
        </div>
    )
}

export default PricingPlanList;