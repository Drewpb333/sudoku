import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = props => {
    const difficultyLevel = 
        <select onChange={props.change}>
            <option value="easy">Easy</option>
            <option value="medium" selected>Medium</option>
            <option value="hard">Hard</option>
        </select>
        
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>Difficulty Level: {difficultyLevel}</div>
            </header>
        </div>  
    ); 
}

export default Header;