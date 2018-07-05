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
      isEditing: false
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    // this.handleEditSubmit = this.handleEditSubmit.bind(this)
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

  handleEdit(event) {
    event.preventDefault()
    this.setState({isEditing: !this.state.isEditing})
    const id = parseInt(event.target.closest('div').id)
    const {data} = this.state
    const filter = data.filter((elem, index) => {
      return index === id
    })

    const found = this.state.data.filter((elem) => {
      return filter[0] === elem
    })

    this.setState({question: found[0].question,
                  answer: found[0].answer})
  }

  handleEditChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  handleEditSubmit(event) {
    event.preventDefault()
    const {target} = event
    const copiedState = [...this.state.data]
    // const formObject = {
    //   question: this.state.question,
    //   answer: this.state.answer
    // }

    console.log(target)

    copiedState.push(formObject)
    this.setState({
      data: copiedState,
      question: '',
      answer: ''
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
    if (this.state.isEditing) {
      return(
        <div className="vertical-center">
          <div className="container">
            <Nav />
            <EditForm  change={this.handleEditChange} editQuestionValue={this.state.question} editAnswerValue={this.state.answer} click={this.handleEdit}  />
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
