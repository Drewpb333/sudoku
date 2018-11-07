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
    console.log(board);
    const unsolvedBoard = this.createUnsolvedBoard(board);
    this.setState({
      board: board,
      unsolvedBoard: unsolvedBoard
    })
  };

  //adds input boxes for blank spaces
  createUnsolvedBoard = (board) => {
    let unsolvedBoard = board.map((val, i)=>{
      return [...board[i]];
    })    
    //removes four to six input values
    for(let q = 0; q < unsolvedBoard.length; q++){
      const y = Math.floor(Math.random() * 3) + 4;
      for(let j = 0; j < y; j++){
        const rand = Math.floor(Math.random() * 9);
        unsolvedBoard[q][rand] = 0;
      }
    }
    return unsolvedBoard;
  }

  //input is array equal to value, row, and column of number
  handleInput (input) {
    const value = parseInt(input[0]);
    const row = input[1];
    const column = input[2];
    this.setState(prevState=>{
      prevState.unsolvedBoard[row][column] = value;
      return {unsolvedBoard: prevState};
    });
    console.log(this.state.board);
    console.log(this.state.unsolvedBoard);
    this.puzzleSolvedHandler();
  }

  puzzleSolvedHandler(){
    if(this.state.board === this.state.unsolvedBoard){
      alert("Congrats! You Won!");
    }
    else{
      console.log("Keep trying!");
    }
  }

  componentWillMount = () =>{
    this.createBoardArr();
  }

  render() {
    console.log(this.state);
    // console.log(this.state.board);
    // const boardRows = row => {
    //   return( <div className='boardRow' key={row}>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 0)}>{this.state.board[row][0]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 1)}>{this.state.board[row][1]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 2)}>{this.state.board[row][2]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 3)}>{this.state.board[row][3]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 4)}>{this.state.board[row][4]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 5)}>{this.state.board[row][5]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 6)}>{this.state.board[row][6]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 7)}>{this.state.board[row][7]}</Card>
    //     <Card handleInput={(val)=>this.handleInput(val, row, 8)}>{this.state.board[row][8]}</Card>
    //   </div>);
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>       
        <div className="board">
          <Card unsolvedBoard={this.state.unsolvedBoard} handleInput={(input)=>{this.handleInput(input)}}/>
        </div>
        <button>Check Puzzle</button>
      </div>
    );
  }
}

export default App;
