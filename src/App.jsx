import { useState } from 'react'
import Header from './Header'
import Game from './Game'

import './App.css'


function App() {
  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [isGameOver,setIsGameOver] = useState(false)
  
  function updateResult(isGameOver){
    if(isGameOver){
      if(score>highScore){
        setHighScore(score)
        setScore(0)
      }
      setIsGameOver(true)
    }else{
      if (score === 0){
        setIsGameOver(false)
      }
      setScore(score+1)
    }
  }


  return (
    <>
      <Header score={score} highScore={highScore} isGameOver={isGameOver}></Header>
      <Game updateResult={updateResult}></Game>
    </>
  )
}

export default App
