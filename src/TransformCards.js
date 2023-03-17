class TransformsCards {
  static setMatched(cards, word) {
    return cards.map(card => {
      if (card.word === word) {
        return { ...card, matched: true }
      } else {
        return card
      }
    })
  }

  static numberOfMatched(cards) {
    return cards.reduce((acc, card) => {
      return card.matched ? acc + 1 : acc
    }, 0)
  }
}

export default TransformsCards;