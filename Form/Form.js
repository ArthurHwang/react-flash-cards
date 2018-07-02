import React from 'react'

const Form = (props) => {

  return (
    <form onSubmit={props.submit}>
      <div className="form-group">
        <label>Question</label>
        <input type="text" value={props.value.question} onChange={props.change} name="question" className="form-control" id="user-question-input" placeholder="Enter Question"/>
      </div>
      <div className="form-group">
        <label>Answer</label>
        <input type="text" value={props.value.answer} onChange={props.change} name="answer" className="form-control" id="user-answer-input" placeholder="Enter Answer"/>
      </div>
      <button type="submit" className="btn btn-primary" id="save-button">Save</button>
    </form>
  )
}

export default Form
