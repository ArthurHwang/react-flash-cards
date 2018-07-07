import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Form from './Form/Form'
import FlashCards from './FlashCard/FlashCards'
import EditForm from './EditForm/EditForm'
import CardCarousel from './CardCarousel/CardCarousel'
import Empty from './Form/Empty'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      view: window.location.hash,
      editIndex: null,
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleEditCancel = this.handleEditCancel.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      const value = JSON.parse(localStorage.getItem('flashcards'));
      this.setState({ data: value })
    }
    window.addEventListener('hashchange', (event) => {
      const newHash = window.location.hash
      this.setState({ view: newHash });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      const json = JSON.stringify(this.state.data)
      localStorage.setItem('flashcards', json);
    }
  }

  clickHandler() {
    window.location.hash = "#new"
    this.setState({ view: '#new' });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleEditCancel() {
    this.setState({ editIndex: null })
  }

  handleEdit({ target }) {
    const { data } = this.state
    const id = parseInt(target.parentNode.parentNode.getAttribute('data-id'))
    this.setState({
      editIndex: id,
    })
    const found = data.find((elem, index) => index === id)
    this.setState({
      question: found.question,
      answer: found.answer,
    })
  }

  handleEditSubmit(event) {
    event.preventDefault()
    const { target } = event
    const findAndUpdate = this.state.data.map((elem, index) => {
      if (index === this.state.editIndex) {
        return elem = {
          question: this.state.question,
          answer: this.state.answer,
        }
      } else {
        return elem;
      }
    })
    this.setState({
      data: findAndUpdate,
      editIndex: null,
    }, () => {
      localStorage.setItem('flashcards', JSON.stringify(this.state.data))
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { target } = event
    const copiedState = [...this.state.data]
    const formObject = {
      question: this.state.question,
      answer: this.state.answer,
    }
    if (target.question.value === "" || target.answer.value === "") {
      alert('Flash card values must not be empty!')
      return
    }
    this.setState({
      data: [formObject, ...copiedState],
      question: '',
      answer: '',
    })
    target.reset()
  }

  handleDestroy({ target }) {
    const delIndex = parseInt(target.parentNode.parentNode.getAttribute('data-id'))
    const copy = [...this.state.data]
    copy.splice(delIndex, 1)
    this.setState({ data: copy }, localStorage.setItem('flashcards', JSON.stringify(this.state.data)))
  }

  renderView() {
    const {
      handleEditSubmit, handleEditCancel, handleEdit,
      clickHandler, state, handleChange, handleSubmit, handleDestroy,
    } = this
    let viewRender = null
    if (state.view === "#new") {
      viewRender = (
        <Form
          view={state.view}
          value={state.data}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )
    }
    if (state.view ==="#cards") {
      viewRender = (
        <FlashCards
          edit={handleEdit}
          onClick={clickHandler}
          data={state.data}
          destroy={handleDestroy}
        />
      )
    }
    if (this.state.view === "#cards" && this.state.editIndex !== null) {
      viewRender = (
        <EditForm
          onSubmit={handleEditSubmit}
          onChange={handleChange}
          editQuestionValue={state.question}
          editAnswerValue={state.answer}
          onClick={handleEditCancel}
        />
      )
    }
    if (this.state.view === "#practice" && !this.state.data.length) {
      viewRender = (
        <Empty onClick={clickHandler} />
      )
    }
    if (this.state.view === "#practice" && this.state.data.length !== 0) {
      viewRender = (
        <CardCarousel
          data={state.data}
        />
      )
    }
    return viewRender
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title text-center">
        React Flash Cards
          <i className="text-danger fab fa-react" />
        </h1>
        <div className="vertical-center">
          <div className="container">
            <Nav />
            {this.renderView()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
