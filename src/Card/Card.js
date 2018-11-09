import React from 'react';
import Row from '../Row/Row';
import Classes from './Card.css';

const Card = props=> {
    const unsolvedRows = props.unsolvedBoard.map((rowNum, i)=>{
        return <Row row={i} values={rowNum} handleInput={input=>props.handleInput(input)}/>;
    })
    return (
        <tbody>
            {unsolvedRows}
        </tbody>
    );
};

export default Card;