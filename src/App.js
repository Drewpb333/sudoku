import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import './Card/Card.css';

class App extends Component {
  state = {
    board: []
  };

  createBoardArr = () =>{
    let board = [[],[],[],[],[],[],[],[],[]];
    for(var i=0; i < 9; i++){
      let numsArr = [1,2,3,4,5,6,7,8,9];
      for(var j=0; j < 9; j++){
        const randIndex = Math.floor(Math.random() * numsArr.length);
        board[i][j] = numsArr[randIndex];
        numsArr.splice(randIndex, 1);
      }
    }
    this.setState({board});
  };

  componentWillMount = () =>{
    this.createBoardArr();
  }

  render() {
    //change this later so it's no rerendered every time

    const boardRows = row => {
      return( <div className='boardRow' key={row}>
        <Card>{this.state.board[row][0]}</Card>
        <Card>{this.state.board[row][1]}</Card>
        <Card>{this.state.board[row][2]}</Card>
        <Card>{this.state.board[row][3]}</Card>
        <Card>{this.state.board[row][4]}</Card>
        <Card>{this.state.board[row][5]}</Card>
        <Card>{this.state.board[row][6]}</Card>
        <Card>{this.state.board[row][7]}</Card>
        <Card>{this.state.board[row][8]}</Card>
      </div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="numberClicked">{this.state.numberClicked}</h2>
        </header>       
        <div className="board">
          {boardRows(0)}
          {boardRows(1)}
          {boardRows(2)}
          {boardRows(3)}
          {boardRows(4)}
          {boardRows(5)}
          {boardRows(6)}
          {boardRows(7)}
          {boardRows(8)}
        </div>
      </div>
    );
  }
}

export default App;
