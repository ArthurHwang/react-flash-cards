import React from 'react'


const FlashCard = (props) => {
  const time = new Date()
  const insertTime = `Date created: ${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`
  return (
    <div className="card">
      <div className="card-header">
        {insertTime}
      </div>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <a className="edit-btn btn btn-primary">edit</a>
        <a className="delete-btn btn btn btn-primary">delete</a>
      </div>
    </div>
  )
}

export default FlashCard
