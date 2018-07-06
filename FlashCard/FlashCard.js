import React from 'react'

const FlashCard = ({
  question, answer, edit, id, destroy,
}) => (
  <div data-id={id} className="flashcard card">
    <div className="card-header bg-warning" />
    <div className="card-body">
      <h5 className="card-title">
        {question}
      </h5>
      <p className="card-text">
        {answer}
      </p>
      <button type="submit" onClick={edit} className="text-primary edit">

        <i className="fas fa-edit" />
      </button>
      <button type="submit" onClick={destroy} className="text-primary destroy">


        <i className="far fa-trash-alt" />
      </button>
    </div>
  </div>
)

export default FlashCard
