import React from 'react';
import Square from '../Square/Square';
import Classes from './Row.css';

const Row = props => {
    const squareValues = props.values.map(num=>{
        return <Square value={num}/>
    });

    return (
        <div>
            {squareValues}
        </div>
    );
}

export default Row;