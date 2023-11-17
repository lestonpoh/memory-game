import { useState , useEffect} from 'react'
import CARDS from './Cards'

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  
shuffle(CARDS)

function Game({updateResult}) {
   

  const [cards, setCards] = useState(CARDS)

  const [clickedCards,setClickedCards] = useState([])




  function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  function handleClickedCards(id){
    if(clickedCards.includes(id)){
        setClickedCards([])
        updateResult(true)
  
    }else{
        clickedCards.push(id)
        updateResult(false)
        
    }
    
    setCards(shuffle(cards))
  }

  return (
    <>
        <div className="cards">
 
            {cards.map(card=>
                 <div className="card" key={card.id} onClick={()=>handleClickedCards(card.id)}>{card.name}</div>)}
        </div>
    
    </>
  )
}

export default Game
