import React from 'react';
import Square from '../Square/Square';
import Classes from './Row.css';

const Row = props => {
    const squareValues = props.values.map((num, i)=>{
        return <Square id={`${props.row}${i.toString()}` }  original={props.original}  value={num} handleInput={input=>props.handleInput(input)}/>
    });

    return (
        <tr className="boardRow">
            {squareValues}
        </tr>
    );
}

export default Row;