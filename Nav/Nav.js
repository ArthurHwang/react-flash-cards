import React from 'react'

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-container">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#cards">Cards<i id="new-button" className="fas fa-sticky-note"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="#new">New<i id="cards-button" className="fas fa-plus-circle"></i></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
