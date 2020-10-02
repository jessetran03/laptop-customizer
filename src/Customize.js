import React from 'react';
import Feature from './Feature.js';

export default function Customize(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        return (
            <Feature
                feature={feature}
                features={props.features}
                idx={idx}
                selected={props.selected}
                updateFeature={props.updateFeature}
            />
        )
    });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}