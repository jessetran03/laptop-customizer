import React from 'react';
import CartItem from './CartItem.js';
import Total from './Total.js';

export default function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
            <CartItem 
                key={featureHash}
                feature={feature}
                selectedOption={selectedOption}
            />
        );
    });

    return (
        <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
            <Total selected={props.selected} />
        </section>
    )
}