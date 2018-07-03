import React, {Component} from 'react'
import Nav from './Nav/Nav'
import View from './View/View'

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
      }
      if (window.location.hash === "#new") {
        this.setState({view: "new"})
      }
    })
  }

  clickHandler(event) {
    this.setState({showEmpty: false})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
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
    event.target.reset()
  }

  render() {
    return(
      <div className="container">
        <Nav />
        <View data={this}/>
      </div>
    )
  }
}
