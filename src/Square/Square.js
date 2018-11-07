import React from 'react';
import Classes from './Square.css';

const Square = props=> {
    let display;
    //row coordinate is equal to first number and column coordinate is equal to second
    const coordinates = [props.id.split("")[0], props.id.split("")[1]];
    if(props.value !== 0){
        display = props.value;
    }
    else{
        display = <input type="text" className="inputSquare" onChange={e=> props.handleInput([e.target.value, ...coordinates])}></input>
    }

    return (
        <div className="square" id={props.id}>
            {display}
        </div>
    );
};

export default Square;