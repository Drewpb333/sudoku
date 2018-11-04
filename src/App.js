import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import './Card/Card.css';

class App extends Component {
  state = {
    board: [],
    unsolvedBoard: []
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

  //adds input boxes for blank spaces
  createUnsolvedBoard = () => {
    let unsolvedBoard = this.state.board.slice();
    //removes four to six input values
    console.log(unsolvedBoard.length);
    for(let q = 0; q < unsolvedBoard.length; q++){
      const y = Math.floor(Math.random() * 3) + 4;
      for(let j = 0; j < y; j++){
        const rand = Math.floor(Math.random() * 9);
        unsolvedBoard[q][rand] = 0;
      }
    }
    this.setState({unsolvedBoard});
  }

  handleInput (val, row, col) {
    const updatedBoard = this.state.unsolvedBoard.slice();
    updatedBoard[row][col] = parseInt(val);
    this.setState({unsolvedBoard: updatedBoard});
    console.log(this.state.board);
    console.log(this.state.unsolvedBoard);
  }

  componentWillMount = () =>{
    this.createBoardArr();
  }

  componentDidMount = () => {
    this.createUnsolvedBoard();
  }

  render() {
    //change this later so it's no rerendered every time

    const boardRows = row => {
      return( <div className='boardRow' key={row}>
        <Card handleInput={(val)=>this.handleInput(val, row, 0)}>{this.state.board[row][0]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 1)}>{this.state.board[row][1]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 2)}>{this.state.board[row][2]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 3)}>{this.state.board[row][3]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 4)}>{this.state.board[row][4]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 5)}>{this.state.board[row][5]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 6)}>{this.state.board[row][6]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 7)}>{this.state.board[row][7]}</Card>
        <Card handleInput={(val)=>this.handleInput(val, row, 8)}>{this.state.board[row][8]}</Card>
      </div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

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
