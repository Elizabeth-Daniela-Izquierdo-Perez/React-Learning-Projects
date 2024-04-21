import { useState } from "react"
import "./App.css"
import confetti from "canvas-confetti"
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index"
import { WinnerModal } from "./components/WinnerModal"
import { TURNS} from './constantes'
import {checkWinner, checkEndGame} from './logic/board'
import {Square} from './components/Square'

function App(){
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
  }) 

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ??  TURNS.X
  })

  const [winner, setWinner] = useState(null)//null no hay ganaor , false empate


  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage();
  }

  

  const updateBoard = (index) =>{
    if(board[index] || winner) return//verifica q no haya nada en esa casilla y q no haya ganador
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //avisar ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }  else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset Game</button>
    <section className="game">
      {
        board.map((_,index) =>{
          return(
            <Square 
            key = {index}
            index = {index}
            updateBoard = {updateBoard}>
              {board[index]}
            </Square>
            )
          
        })
      }
    </section>

    <section className="turn">
      <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
    </section>
    <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App