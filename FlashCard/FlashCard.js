import React from 'react'

const FlashCard = ({question, answer}) => {
  return (
    <div className="card">
      <div className="card-header bg-warning">
      </div>
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <p className="card-text">{answer}</p>
      </div>
    </div>
  )
}

export default FlashCard
