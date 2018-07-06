import React from 'react'

const Empty = ({ click }) => (
  <div className="text-center">
    <h1 className="">
      You have no flash cards
    </h1>
    <button
      className="btn-lg btn btn-success"
      href="#new"
      id="make-one-button"
      onClick={click}
    >
      Make one
    </button>
  </div>
)

export default Empty
