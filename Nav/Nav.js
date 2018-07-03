import React from 'react'

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#cards">Cards</a></li>
          <li className="nav-item"><a className="nav-link" href="#new">New</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
