import React from 'react'
import FlashCard from './FlashCard'
import Empty from '../Form/Empty.js'

const FlashCards = ({click, data}) => {
  const cardData = [...data]
  let cards = <Empty click={click}/>
  if (data.length) {
    cards = cardData.map((elem, index) => {
      return <FlashCard key={index} question={elem.question} answer={elem.answer}/>
    })
  }
  return cards
}

export default FlashCards
