
import React, {Component} from 'react'
import Nav from './Nav/Nav'
import Form from './Form/Form'
import FlashCards from './FlashCard/FlashCards'
import EditForm from './EditForm/EditForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: [],
      question: '',
      answer: '',
      view: window.location.hash,
      isEditing: false,
      editId: null
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleEditCancel = this.handleEditCancel.bind(this)
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      const value = JSON.parse(localStorage.getItem('flashcards'));
      this.setState({data: value})
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

  clickHandler() {
    window.location.hash = "#new"
    this.setState({view: '#new'})
  }

  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  handleEditCancel() {
    this.setState({isEditing: false})
  }

  handleEdit(event) {
    event.preventDefault()
    const {data} = this.state
    const id = parseInt(event.target.parentNode.parentNode.getAttribute('data-id'))
    this.setState({
      isEditing: true,
       editId: id
     })
    const found = data.find((elem, index) => {
      return index === id
    })
    console.log(found)
    this.setState({
      question: found.question,
      answer: found.answer,
    })
  }

  handleEditSubmit(event) {
    event.preventDefault()
    const {target} = event
    const copiedState = [...this.state.data]
    const findAndUpdate = copiedState.map((elem, index) => {
      if (index === this.state.editId) {
      return elem = {
        question: this.state.question,
        answer: this.state.answer
      }
      } else {
        return elem
      }
    })
    this.setState({
      data: findAndUpdate,
      isEditing: false
    },() => {
      localStorage.setItem('flashcards', JSON.stringify(this.state.data))
    })
  }

  renderView() {
    const {handleEdit, clickHandler, state, handleChange, handleSubmit} = this
    const cardView = <FlashCards edit={handleEdit} click={clickHandler} data={state.data}/>
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
    if (this.state.isEditing && this.state.view === "#cards") {
      return(
        <div className="vertical-center">
          <div className="container">
            <Nav />
            <EditForm
              submit={this.handleEditSubmit}
              change={this.handleChange}
              editQuestionValue={this.state.question}
              editAnswerValue={this.state.answer}
              click={this.handleEditCancel}  />
          </div>
        </div>
      )
    }
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
