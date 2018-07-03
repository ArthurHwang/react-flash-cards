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
      showEmpty: true,
      view: 'new'
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', (event) => {
      if (window.location.hash === "#cards") {
        this.setState({view: "cards"})
        console.log(this.state)
      }
      if (window.location.hash === "#new") {
        this.setState({view: "new"})
        console.log(this.state)
      }
    })
  }

  clickHandler(event) {
    this.setState({showEmpty: false})
    console.log(this.state)
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
    const cardView = <FlashCards data={this.state.data} />
    const newView = <Form click={this.clickHandler} value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
    let viewRender = null

    if (this.state.view === "cards") {
      viewRender = cardView
    }
    if (this.state.view === "new") {
      viewRender = newView
    }



    return(
      <div className="container">
        <Nav click=""/>
        {/* <Form click={this.clickHandler} value={this.state} change={this.handleChange} submit={this.handleSubmit}/>
        <FlashCards data={this.state.data} /> */}
        {/* {this.state.view} */}
        {viewRender}
      </div>
    )
  }
}
