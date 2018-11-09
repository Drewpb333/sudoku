import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  state = {
    board: [],
    unsolvedBoard: []
  }

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
    this.checkBoardColumns(board);
    const unsolvedBoard = this.createUnsolvedBoard(board);
    this.setState({
      board: board,
      unsolvedBoard: unsolvedBoard
    })
    console.log(board);
  };

  //creates new array to prevent duplicate numbers in columns
  checkBoardColumns = board =>{
    const boardColumns = board.slice();
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        boardColumns[i][j] = board[j][i];
      }
    }

    console.log(boardColumns);
    // return boardColumns;
  }

  //adds input boxes for blank spaces
  createUnsolvedBoard = board => {
    let unsolvedBoard = board.map((val, i)=>{
      return [...board[i]];
    })    
    //removes four to six input values
    for(let q = 0; q < unsolvedBoard.length; q++){
      const y = Math.floor(Math.random() * 2);
      for(let j = 0; j < y; j++){
        const rand = Math.floor(Math.random() * 9);
        unsolvedBoard[q][rand] = 0;
      }
    }
    return unsolvedBoard;
  }

  //input is array equal to value, row, and column of number
  handleInput = input=>{
    const value = parseInt(input[0]);
    const row = input[1];
    const column = input[2];
    this.setState(prevState=>{
      const unsolvedBoard = prevState.unsolvedBoard;
      unsolvedBoard[row][column] = value;
      return {unsolvedBoard};
    });
  }

  puzzleSolvedHandler = () =>{
    let solved = true;
    const solvedBoard = this.state.board;
    const unsolvedBoard = this.state.unsolvedBoard;
    for(let i = 0; i < solvedBoard.length; i++){
      for(let j = 0; j < solvedBoard[i].length; j++){
        if(solvedBoard[i][j] !== unsolvedBoard[i][j]) {
          solved = false;
        }
      }
    }
    if(solved){
      alert("Congrats! You Won!");
    }
    else{
      alert("Keep trying");
    }
  }

  componentWillMount = () =>{
    this.createBoardArr();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>       
        <table className="board">
          <Card unsolvedBoard={this.state.unsolvedBoard} handleInput={input=>this.handleInput(input)}/>
        </table>
        <button onClick={this.puzzleSolvedHandler}>Check Puzzle</button>
      </div>
    );
  }
}

export default App;
