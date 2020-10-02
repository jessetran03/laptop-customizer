import React from 'react';
import FeatureItem from './FeatureItem.js';

export default function Feature(props) {
    const featureHash = props.feature + '-' + props.idx;
    const options = props.features[props.feature].map(item => {
    return (
        <FeatureItem
            item={item}
            feature={props.feature}
            selected={props.selected}
            updateFeature={props.updateFeature}
        />
    )
    });

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
}