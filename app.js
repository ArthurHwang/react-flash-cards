import React, {Component} from 'react'
import Nav from './Nav/Nav'
import Form from './Form/Form'
import FlashCards from './FlashCard/FlashCards'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      view: window.location.hash
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      this.hydrateStateWithLocalStorage()
    }
    window.addEventListener('hashchange', (event) => {
      const newHash = window.location.hash
      this.setState({view: newHash})
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      const json = JSON.stringify(this.state.data)
      localStorage.setItem('flashcards', json);
    }
  }

  hydrateStateWithLocalStorage() {
    const value = JSON.parse(localStorage.getItem('flashcards'));
    this.setState({data: value})
  }

  clickHandler() {
    window.location.hash = "#new"
    this.setState({view: '#new'})
  }

  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  renderView() {
    const {clickHandler, state, handleChange, handleSubmit} = this
    const cardView = <FlashCards click={clickHandler} data={state.data}/>
    const newView = <Form view={state.view} value={state.data} change={handleChange} submit={handleSubmit}/>
    const viewRender = state.view === "#cards" ? cardView : newView
    return viewRender
  }

  handleSubmit(event) {
    const {target} = event
    if (target.question.value === "" || target.answer.value === "") {
      alert('Flash card values must not be empty!')
      return
    }
    event.preventDefault()
    const copiedState = [...this.state.data]
    const formObject = {
      question: this.state.question,
      answer: this.state.answer
    }
    copiedState.push(formObject)
    this.setState({
      data: copiedState,
      question: '',
      answer: ''
    })
    target.reset()
  }

  render() {
    return(
      <div className="vertical-center">
        <div className="container">
          <Nav />
          <h1 className="title text-center">React Flash Cards <i className="text-primary fab fa-react"></i></h1>
          {this.renderView()}
        </div>
      </div>
    )
  }
}
