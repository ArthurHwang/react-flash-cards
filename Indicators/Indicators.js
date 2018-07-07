import React from 'react';
import Pip from './Pip';

const Indicators = props => (
  <ul className="carousel-indicators">
    {props.data.map((card, index) => (
      <Pip
        key={index}
        index={index}
        activeIndex={props.activeIndex}
      />
    ))}
  </ul>
)

export default Indicators
