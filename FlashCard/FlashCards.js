import React from 'react'
import FlashCard from './FlashCard'
import Empty from '../Form/Empty'

const FlashCards = ({ edit, onClick, data, destroy }) => {
  const cardData = [...data];
  let cards = <Empty onClick={onClick} />
  if (data.length) {
    cards = cardData.map((elem, index) => (
      <FlashCard
        id={index}
        edit={edit}
        key={index}
        destroy={destroy}
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
