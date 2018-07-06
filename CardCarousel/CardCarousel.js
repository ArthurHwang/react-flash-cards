import React from 'react'
import FlashCard from '../FlashCard/FlashCard.js'
import Arrow from './Arrow.js'

const CardCarousel = ({show, item, click}) => {
  let showAnswer = null
  if (show) {
    showAnswer = item.answer
  }
  return (
    <div  className="flashcard card">
      <div className="card-header bg-warning" />
      <div className="card-body">
        <h5 className="card-title">
          {item.question}
        </h5>
        <i onClick={click} className="fas fa-angle-double-down"></i>
        <p className="card-text">
          {showAnswer}
        </p>
      </div>
    </div>
  )
}

export default CardCarousel
