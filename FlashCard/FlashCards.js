import React from 'react'
import FlashCard from './FlashCard'
import Empty from '../Form/Empty'

const FlashCards = ({ edit, click, data }) => {
  const cardData = [...data]
  let cards = <Empty click={click} />
  if (data.length) {
    cards = cardData.map((elem, index) => (
      <FlashCard
        id={index}
        edit={edit}
        key={index}
        question={elem.question}
        answer={elem.answer}
      />
    ))
  }

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default FlashCards
