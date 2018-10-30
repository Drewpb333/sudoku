import React from 'react';
import './Card.css';

const card = props=> {
    let display;
    if(props.children !== 0){
        display = props.children;
    }
    else{
        display = <input type="text" className="inputSquare"></input>
    }

    return (
        <div className="square">
            {display}
        </div>
    );
};

export default card;