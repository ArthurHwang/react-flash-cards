import React from 'react'
import Empty from './Empty'

const Form = (props) => {
  const counter = `Number of Flashcards: ${props.value.data.length}`
  const form = <div className="card-container card" >
    <div className="new-card-form card-body">
      <form className="user-form" onSubmit={props.submit}>
        <h1>Create a Flash Card</h1>
        <div className="form-group">
          <label>Question</label>
          <input type="text" value={props.value.question} onChange={props.change} name="question" className="form-control" placeholder="Enter Question"/>
        </div>
        <div className="form-group">
          <label>Answer</label>
          <input type="text" value={props.value.answer} onChange={props.change} name="answer" className="form-control" placeholder="Enter Answer"/>
        </div>
        <button type="submit" className="btn btn-large btn-success">Save</button>
        <p className="counter">{counter}</p>
      </form>
    </div>
  </div>

  const toBeRendered = props.value.showEmpty ? <Empty click={props.click}/> : form

  return (
    toBeRendered
  )
}

export default Form
