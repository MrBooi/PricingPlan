import React from 'react';

import OfferItem from './ofterItem';
import SubstribeButton from "./subscribeButton";

const PricingPlanCard = (props) => {
    const { price_plan, price, decription, offers } = props.data;
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-white text-uppercase text-center">{price_plan}</h5>
                    <h6 className="card-price text-center">{decription}<span className="period"></span></h6>
                    <hr></hr>
                    <ul className="fa-ul">
                        {
                            offers.map((val, index) => (
                                <OfferItem key={index} value={val} />
                            ))
                        }
                    </ul>
                    <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>
                    <SubstribeButton />
                </div>
            </div>
        </div>
    )
}

export default PricingPlanCard;

