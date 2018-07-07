import React from 'react'

const FlashCard = ({ question, answer, edit, id, destroy }) => (
  <div data-id={id} className="flashcard card">
    <div className="card-header bg-danger" />
    <div className="card-body">
      <h5 className="card-title">
        {question}
      </h5>
      <p className="card-text">
        {answer}
      </p>
      <i onClick={edit} className="fas fa-edit edit text-warning" />
      <i onClick={destroy} className="far fa-trash-alt destroy text-danger" />
    </div>
  </div>
)

export default FlashCard
