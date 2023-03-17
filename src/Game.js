import { useEffect, useState } from 'react'
import './index.css';
import Card from './Card'

const cardData = [
  { id: 1, word: "Foo", matched: false },
  { id: 2, word: "Foo", matched: false },
  { id: 3, word: "Bar", matched: false },
  { id: 4, word: "Bar", matched: false },
  { id: 5, word: "Qaz", matched: false },
  { id: 6, word: "Qaz", matched: false }
]

function Game() {
  const [cards, setCards] = useState(cardData)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [gameStatus, setGameStatus] = useState("Select 2 cards")

  const handleChoice = (chosenCard) => {
    choiceOne ? setChoiceTwo(chosenCard) : setChoiceOne(chosenCard)
  }

  const resetTurn = () => {
    setGameStatus("Select 2 cards")
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.word === choiceTwo.word) {
        setCards(previousCards => {
          return previousCards.map(card => {
            if (card.word === choiceOne.word) {
              return { ...card, matched: true }
            } else {
              return card
            }

          })
        })
        setGameStatus("It's a match!")

      } else {
        setGameStatus("No match!")
      }
      setTimeout(() => { resetTurn() }, 1000)
    }
  }, [choiceOne, choiceTwo]
  )

  return (
    <div className="App">
      <div className="card-group">
        {cards.map((card) => {
          return <Card key={card.id} card={card} flipped={card === choiceOne || card === choiceTwo || card.matched}
            handleChoice={handleChoice} />
        })}
      </div>

      <div className="status">
        {gameStatus}
      </div>
    </div>
  );
}

export default Game;
