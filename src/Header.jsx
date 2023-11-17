import { useState } from 'react'

function Header({score,highScore,isGameOver}) {
  
  return (
    <>
        <div className="header">
            <div>
                {isGameOver && <div>Game Over</div>}
            </div>
            
            <div>{"Score: "+score}</div>
            <div>{"High Score: "+highScore}</div>
        </div>
    </>
  )
}

export default Header
