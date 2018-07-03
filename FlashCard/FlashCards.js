import React from 'react'
import FlashCard from './FlashCard'


const FlashCards = (props) => {
  const cardData = [...props.data]
  const cards = cardData.map((elem, index) => {
    return <FlashCard key={index} question={elem.question} answer={elem.answer}/>
    return <h1>hi</h1>
  })
  return (
    cards
  )
}

export default FlashCards
