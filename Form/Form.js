import React from 'react'
import Empty from './Empty'

const Form = (props) => {
  let toBeRendered = <Empty click={props.click}/>;
  const counter = `Number of Flashcards: ${props.value.data.length}`
  const form = <div className="card-container card" >
    <div className="new-card-form card-body">
      <form className="user-form" onSubmit={props.submit}>
        <h1 className="title">Create a Flash Card</h1>
        <div className="form-group">
          <label>Question</label>
          <input type="text" value={props.value.question} onChange={props.change} name="question" className="form-control" id="user-question-input" placeholder="Enter Question"/>
        </div>
        <div className="form-group">
          <label>Answer</label>
          <input type="text" value={props.value.answer} onChange={props.change} name="answer" className="form-control" id="user-answer-input" placeholder="Enter Answer"/>
        </div>
        <button type="submit" id="save-button" className="btn btn-primary">Save</button>
        <p className="counter">{counter}</p>
      </form>
    </div>
  </div>

  if (!props.value.showEmpty) {
    toBeRendered = form
  }
  return (
    toBeRendered
  )
}

export default Form
