import React, {Component} from 'react'
import Form from './Form/Form.js'

export default class FlashCards extends Component {
  constructor(props) {
    super(props)
    this.state = ({data: []})
  }

  render() {
    return(
      <Form />
    )
  }
}
