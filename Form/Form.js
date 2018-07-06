import React from 'react'
import Empty from './Empty'

const Form = ({
  view, click, value, change, submit,
}) => {
  const counter = `Number of Flashcards: ${value.length}`
  return (
    <div className="card-container card">
      <div className="new-card-form card-body">
        <form className="user-form" onSubmit={submit}>
          <h1>
            Create a Flash Card
          </h1>
          <div className="form-group">
            <label>
              Question
            </label>
            <input
              type="text"
              value={value.question}
              onChange={change}
              name="question"
              className="form-control"
              placeholder="Enter Question"
            />
          </div>
          <div className="form-group">
            <label>
              Answer
            </label>
            <input
              type="text"
              value={value.answer}
              onChange={change}
              name="answer"
              className="form-control"
              placeholder="Enter Answer"
            />
          </div>
          <button type="submit" className="btn btn-large btn-success">
            Save
          </button>
          <p className="counter">
            { counter }
          </p>
        </form>
      </div>
    </div>
  )
}

export default Form
