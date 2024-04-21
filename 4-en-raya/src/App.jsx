import { useState } from 'react'
import './App.css'
import redToken from './assets/redToken.svg'
import blackToken from './assets/blackToken.svg'
 

const TURNS = {
  black:'x',
  red:'o'
}

// eslint-disable-next-line react/prop-types
const Slot = ({updateBoard, ch, x, y})=>{
  const handleClick = () =>{
    updateBoard(x, y)
  }
  return(
    <div className='slot' x={x} y={y} onClick={handleClick}>
      {ch && (
        <img src ={ch === TURNS.red ? blackToken : redToken} className = "svg "/>
      )}
    </div>
  )
}



function App(){
  const[board, setBoard] = useState([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ])

  const [turn, setTurn] = useState(TURNS.black)

  const updateBoard = (x, y) =>{
    if(board[x][y]) return

    //actuaizar tablero
    const newBoard = [...board]
    newBoard[x][y] = turn
    setBoard(newBoard)

    //actualizar turno
    const newTurn = turn === TURNS.black ? TURNS.red : TURNS.black
    setTurn(newTurn)
  }
  
  return(
    <main className='board'>
      <h1>4 en raya</h1>
      <section className='game'>
        {board.map((row, indexRow)=>{
          return row.map((ch, colIndex)=> <Slot updateBoard={updateBoard} key={colIndex} ch={ch} x={indexRow} y={colIndex}/>)
        })}
      </section>
    </main>
  )
}

export default App