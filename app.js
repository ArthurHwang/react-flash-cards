import React, {Component} from 'react'
import Form from './Form/Form'
import Nav from './Nav/Nav'

export default class FlashCards extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: ''
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newData = [...this.state.data]
    const formObject = {
      question: this.state.question,
      answer: this.state.answer
    }
    newData.push(formObject)
    this.setState({
      data: newData,
      question: '',
      answer: ''
    })
    event.target.reset()
  }

  render() {
    return(
      <div className="container">
        <Nav />
        <Form value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
      </div>
    )
  }
}
