function Card({card, flipped, handleChoice}) {
  const content = card.matched || flipped ? card.word : ""

  const handleClick = () => {
    handleChoice(card)
  }

  return(
    <div className="card" onClick={handleClick} data-flipped={flipped}>
      {content}

      { card.matched ? <p>✅</p> : null }
    </div>
  )
}

export default Card;