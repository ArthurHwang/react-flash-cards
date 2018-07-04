import React from 'react'
import Form from '../Form/Form'
import FlashCards from '../FlashCard/FlashCards'

const View = (props) => {
  const cardView = <FlashCards data={props.data.state.data} />
  const newView = <Form click={props.data.clickHandler} value={props.data.state} change={props.data.handleChange} submit={props.data.handleSubmit}/>
  const viewRender = props.data.state.view === "cards" ? cardView : newView
  return (
    viewRender
  )
}

export default View
