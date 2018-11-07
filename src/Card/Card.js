import React from 'react';
import App from '../App';
import Row from '../Row/Row';
import Classes from './Card.css';

const Card = props=> {
    //delete after unsolvedboard works
    const rows = props.board.map(row=>{
        return <Row values={row}/>;
    })
    
    const unsolvedRows = props.unsolvedBoard.map(row=>{
        return <Row values={row}/>;
    })
    return (
        {rows}
    );
};

export default Card;