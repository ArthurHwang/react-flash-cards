import React from 'react'

const FlashCard = ({question, answer, edit, id}) => {
  return (
    <div id={id} className="flashcard card">
      <div className="card-header bg-warning">
      </div>
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <p className="card-text">{answer}</p>
      </div>
      <button onClick={edit} className="text-primary edit">Edit<i className="fas fa-edit"></i></button>
    </div>
  )
}

export default FlashCard
