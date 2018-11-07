import React from 'react';
import Classes from './Square.css';

const Square = props=> {
    let display;
    if(props.value !== 0){
        display = props.value;
    }
    else{
        display = <input type="text" className="inputSquare" onChange={e=> props.handleInput(e.target.value)}></input>
    }

    return (
        <div className="square">
            {display}
        </div>
    );
};

export default Square;