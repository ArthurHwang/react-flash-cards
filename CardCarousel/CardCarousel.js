import React, { Component } from 'react'
import Arrow from './Arrow'
import Indicators from '../Indicators/Indicators'

export default class CardCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      currentPracticeCardIndex: 0,
      showAnswer: false,
    })
    this.hideAnswer = this.hideAnswer.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
  }

  previousCard() {
    const lastIndex = this.props.data.length - 1;
    const { currentPracticeCardIndex } = this.state;
    const shouldResetIndex = currentPracticeCardIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPracticeCardIndex - 1;
    this.setState({
      currentPracticeCardIndex: index,
    });
  }

  nextCard() {
    const lastIndex = this.props.data.length - 1;
    const { currentPracticeCardIndex } = this.state;
    const shouldResetIndex = currentPracticeCardIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentPracticeCardIndex + 1;
    this.setState({
      currentPracticeCardIndex: index,
    });
  }

  hideAnswer(event) {
    this.setState({
      showAnswer: !this.state.showAnswer,
    })
  }

  render() {
    const item = this.props.data[this.state.currentPracticeCardIndex]
    let showAnswer = " Click to Show Answer!"
    if (this.state.showAnswer) {
      showAnswer = (
        <strong>
          {item.answer}
        </strong>
      )
    }
    return (
      <div className="card-container carousel">
        <Arrow direction="left" onClick={this.previousCard} />
        <div className="flashcard card">
          <div className="card-header bg-danger" />
          <div className="card-body">
            <h5 className="card-title">
              {item.question}
            </h5>
            <p className="answer-text card-text">
              <i onClick={this.hideAnswer} className="show-answer text-danger fas fa-angle-double-down" />
              {showAnswer}
            </p>
          </div>
        </div>
        <Arrow direction="right" onClick={this.nextCard} />
        <Indicators
          data={this.props.data}
          activeIndex={this.state.currentPracticeCardIndex}
        />
      </div>
    )
  }
}
