import React, {Component} from 'react'
import Arrow from './Arrow.js'

export default class CardCarousel extends Component{
  constructor({state}) {
    super(state)
    this.state = ({
      currentPracticeCardIndex: 0,
      showAnswer: false
    })
    this.hideAnswer = this.hideAnswer.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  previousImage() {
    const lastIndex = state.data.length - 1;
    const {currentPracticeCardIndex} = this.state;
    const shouldResetIndex = currentPracticeCardIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPracticeCardIndex - 1;
    this.setState({
      currentPracticeCardIndex: index
    });
  }

  nextImage() {
    const lastIndex = state.data.length - 1;
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
    // const {data} = props
  // ``  let item = props.data[this.state.currentPracticeCardIndex]
      let showAnswer = "Click to Show Answer!"
      // if (this.state.showAnswer) {
      //   showAnswer = <strong>{data.answer}</strong>
      // }
      return (
        <React.Fragment>
        <h1 className="practice">Practice your flashcards!</h1>
        <div className="carousel">
          <Arrow direction="left" clickFunction={ this.previousImage }/>
          <div  className="flashcard card">
            <div className="card-header bg-warning" />
            <div className="card-body">
              <h5 className="card-title">
                {/* {data.question} */}
              </h5>
              <i onClick={this.hideAnswer} className="show-answer text-danger fas fa-angle-double-down"></i>
              <p className="answer-text card-text">
                {/* {showAnswer} */}
              </p>
            </div>
          </div>
        <Arrow direction="right" clickFunction={ this.nextImage } />
        </div>
      </React.Fragment>
      )
    }
  }
