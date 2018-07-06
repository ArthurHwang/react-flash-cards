import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Form from './Form/Form'
import FlashCards from './FlashCard/FlashCards'
import EditForm from './EditForm/EditForm'
import CardCarousel from './CardCarousel/CardCarousel'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      view: window.location.hash,
      editIndex: null,
      currentPracticeCardIndex: 0,
      showAnswer: false
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleEditCancel = this.handleEditCancel.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this);
    this.hideAnswer = this.hideAnswer.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
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

  handleEdit(event) {
    const { data } = this.state
    const id = parseInt(event.target.parentNode.parentNode.getAttribute('data-id'))
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
    const { target } = event
    if (target.question.value === "" || target.answer.value === "") {
      alert('Flash card values must not be empty!')
      return
    }
    event.preventDefault()
    const copiedState = [...this.state.data]
    const formObject = {
      question: this.state.question,
      answer: this.state.answer,
    }
    copiedState.push(formObject)
    this.setState({
      data: copiedState,
      question: '',
      answer: '',
    })
    target.reset()
  }

  handleDestroy(event) {
    const { target } = event
    const delIndex = parseInt(target.parentNode.parentNode.getAttribute('data-id'))
    const copy = [...this.state.data]
    copy.splice(delIndex, 1)
    this.setState({ data: copy }, localStorage.setItem('flashcards', JSON.stringify(this.state.data)))
  }

  renderView() {
    const { handleEdit, clickHandler, state, handleChange, handleSubmit, handleDestroy } = this
    const viewRender = state.view === "#cards"
      ? (
        <FlashCards
          edit={handleEdit}
          click={clickHandler}
          data={state.data}
          destroy={handleDestroy}
        />
      )
      : (
        <Form
          view={state.view}
          value={state.data}
          change={handleChange}
          submit={handleSubmit}
        />
      )
    return viewRender
  }

  previousImage() {
    const lastIndex = this.state.data.length - 1;
    const {currentPracticeCardIndex} = this.state;
    const shouldResetIndex = currentPracticeCardIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPracticeCardIndex - 1;
    this.setState({
      currentPracticeCardIndex: index
    });
  }
  nextImage() {
    const lastIndex = this.state.data.length - 1;
    const {currentPracticeCardIndex} = this.state;
    const shouldResetIndex = currentPracticeCardIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentPracticeCardIndex + 1;

    this.setState({
      currentPracticeCardIndex: index
    });
  }

  hideAnswer(event) {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  render() {

    if (this.state.editIndex !== null && this.state.view === "#cards") {
      return (
        <React.Fragment>
          <h1 className="title text-center">
          React Flash Cards
          <i className="text-primary fab fa-react" />
          </h1>
          <div className="vertical-center">
            <div className="container">
              <Nav />
              <EditForm
                submit={this.handleEditSubmit}
                change={this.handleChange}
                editQuestionValue={this.state.question}
                editAnswerValue={this.state.answer}
                click={this.handleEditCancel}
              />
            </div>
          </div>
        </React.Fragment>
      )
    }
    if (this.state.view === "#practice" && this.state.data.length !== 0) {
      return (

        <React.Fragment>
          <h1 className="title text-center">
          React Flash Cards
          <i className="text-primary fab fa-react" />
          </h1>
          <div className="vertical-center">
            <div className="container">
              <Nav />
              <CardCarousel
                item={this.state.data[this.state.currentPracticeCardIndex]}
                click={this.hideAnswer}
                show={this.state.showAnswer}
                next={this.nextImage}
                previous={this.previousImage}
              />
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <h1 className="title text-center">
        React Flash Cards
        <i className="text-primary fab fa-react" />
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
