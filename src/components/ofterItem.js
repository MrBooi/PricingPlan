import React  from 'react';

const offerItem = (props) => {
    const { value } = props;
    return <li><span className="fa-li">
        <i className="fas fa-check">
        </i></span>{value}</li>;
}

export default offerItem;