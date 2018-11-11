import React from 'react';
import './Square.css';

const Square = props=> {   
    let display;
    //row coordinate is equal to first number and column coordinate is equal to second
    const row = props.id.split("")[0];
    const column = props.id.split("")[1];
    //checks original unsolved array to see if value is 0
    const {originalUnsolvedBoard} = props.boards;
    console.log(props.boards);
    if(originalUnsolvedBoard[row][column] !== 0){
        display = props.value;
    }
    else{
        display = <input type="text" className="inputSquare" onChange={e=> props.handleInput([e.target.value, row, column])}></input>
    }

    return (
        <td className="square" style={display!==props.value?{"background": "#bdf3bd"}:{}} id={props.id}>
            {display}
        </td>
    );
};

export default Square;