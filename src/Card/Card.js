import React from 'react';
import Row from '../Row/Row';
import Classes from './Card.css';

const Card = props=> {
    console.log(props.board);
    console.log(props.unsolvedBoard);
    const unsolvedRows = props.unsolvedBoard.map(row=>{
        return <Row values={row}/>;
    })
    return (
        <div>
            {unsolvedRows}
        </div>
    );
};

export default Card;