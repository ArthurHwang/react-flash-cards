import React, {Component} from 'react'
import Form from './Form/Form'
import Nav from './Nav/Nav'
import Empty from './Form/Empty'

export default class FlashCards extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      isEmpty: true
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

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
      answer: '',
      isEmpty: false
    })
    event.target.reset()
  }

  render() {
    const form = <Form value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
    const empty = <Empty />

    return(
      <div className="container">
        <Nav click=""/>
        <Form value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
        {this.state.isEmpty ? empty : form}
      </div>
    )
  }
}
