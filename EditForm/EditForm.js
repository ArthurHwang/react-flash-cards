import React from 'react'

const EditForm = ({ editQuestionValue, editAnswerValue, onSubmit, onClick, onChange }) => (
  <div className="card-container card">
    <div className="new-card-form card-body">
      <form className="user-form" onSubmit={onSubmit}>
        <h1>
          Edit Flash Card
        </h1>
        <div className="form-group">
          <label>
            Edit Question
          </label>
          <input
            type="text"
            value={editQuestionValue}
            onChange={onChange}
            name="question"
            className="form-control"
            placeholder="Enter Question"
          />
        </div>
        <div className="form-group">
          <label>
            Edit Answer
          </label>
          <input
            type="text"
            value={editAnswerValue}
            onChange={onChange}
            name="answer"
            className="form-control"
            placeholder="Enter Answer"
          />
        </div>
        <button type="submit" className="btn-edit-save btn btn-large btn-success">
          Save Edit
        </button>
        <button onClick={onClick} type="submit" className="btn-edit-cancel btn btn-large btn-danger">
          Cancel
        </button>
      </form>
    </div>
  </div>
)

export default EditForm
