import React from 'react'

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-container">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li><a className="nav-link" href="#cards">Cards <i className="text-warning fas fa-sticky-note"></i></a></li>
          <li><a className="nav-link" href="#new">New <i className="text-success fas fa-plus-circle"></i></a></li>
          <li><a className="nav-link" href="#practice">Practice <i className="text-info fas fa-tasks"></i></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
