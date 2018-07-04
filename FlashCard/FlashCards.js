import React from 'react'
import FlashCard from './FlashCard'

const FlashCards = (props) => {
  const cardData = [...props.data]
  const cards = cardData.map((elem, index) => {
    return <FlashCard key={index} question={elem.question} answer={elem.answer}/>
  })
  return (
    cards
  )
}

export default FlashCards
