import React from 'react';
import './Card.css';

const card = props=> {
    return (
        <div className="square">
            {props.children}
        </div>
    );
};

export default card;