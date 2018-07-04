import React from 'react'

const FlashCard = (props) => {
  const time = new Date()
  const insertTime = `Date created: ${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`
  return (
    <div className="card">
      <div className="card-header bg-warning">
        {insertTime}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">{props.answer}</p>
      </div>
    </div>
  )
}

export default FlashCard
