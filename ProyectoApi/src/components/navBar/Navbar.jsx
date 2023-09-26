import React from 'react'

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Series</a>
          </li>
      </ul>
    </div>
  )
}

export default Navbar