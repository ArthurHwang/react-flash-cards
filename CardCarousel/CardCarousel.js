import React from 'react'
import FlashCard from '../FlashCard/FlashCard.js'
import Arrow from './Arrow.js'

const CardCarousel = ({show, item, click, next, previous}) => {
  let showAnswer = "Click to Show Answer!"
  if (show) {
    showAnswer = <strong>{item.answer}</strong>
  }
  return (
    <React.Fragment>
    <h1 className="practice">Practice your flashcards!</h1>
    <div className="carousel">
      <Arrow direction="left" clickFunction={ previous }/>
      <div  className="flashcard card">
        <div className="card-header bg-warning" />
        <div className="card-body">
          <h5 className="card-title">
            {item.question}
          </h5>
          <i onClick={click} className="show-answer text-danger fas fa-angle-double-down"></i>
          <p className="answer-text card-text">
            {showAnswer}
          </p>
        </div>
      </div>
    <Arrow direction="right" clickFunction={ next } />
    </div>
  </React.Fragment>
  )
}

export default CardCarousel
