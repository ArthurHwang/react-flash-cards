import React from 'react'

const Form = ({ view, click, value, onChange, onSubmit }) => (
  <div className="card-container card">
    <div className="new-card-form card-body">
      <form className="user-form" onSubmit={onSubmit}>
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
            onChange={onChange}
            name="answer"
            className="form-control"
            placeholder="Enter Answer"
          />
        </div>
        <button type="submit" className="btn-save-card btn btn-large btn-success">
            Save
        </button>
      </form>
    </div>
  </div>
)

export default Form
