import React from 'react'

const Form = (props) => {
  return (
    <div class="card-container card" >
      <div class="card-body">
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
          <button type="submit" className="save-btn btn btn-primary">Save</button>
        </form>
      </div>
    </div>

  )
}

export default Form
