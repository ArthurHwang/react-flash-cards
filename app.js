import React, {Component} from 'react'
import Form from './Form/Form'
import Nav from './Nav/Nav'
import Empty from './Form/Empty'
import FlashCards from './FlashCard/FlashCards.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      isEmpty: true,
      view: 'new'
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', function(event) {
      if (window.location.hash = "#cards") {
        this.setState({view: cards})
      }
    })
  }

  clickHandler(event) {
    this.setState({isEmpty: false})
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


    return(
      <div className="container">
        <Nav click=""/>
        <Form click={this.clickHandler} value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
        <FlashCards data={this.state.data} />
      </div>
    )
  }
}
