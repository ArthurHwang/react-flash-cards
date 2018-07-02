import React from 'react'

const Form = (props) => {

  return (
    <form>
      <div className="form-group">
        <label for="user-question">Question</label>
        <input type="text" className="form-control" id="user-question-input" placeholder="Enter Question"/>
      </div>
      <div className="form-group">
        <label for="user-answer">Answer</label>
        <input type="text" className="form-control" id="user-answer-input" placeholder="Enter Answer"/>
      </div>
      <button type="submit" className="btn btn-primary" id="save-button">Save</button>
    </form>
  )
}

export default Form
