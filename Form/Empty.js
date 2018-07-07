import React from 'react'

const Empty = ({ onClick }) => (
  <div className="text-center">
    <h1 className="">
      You have no flash cards
    </h1>
    <button
      className="btn btn-success"
      href="#new"
      id="make-one-button"
      onClick={onClick}
    >
      Make one
    </button>
  </div>
)

export default Empty
