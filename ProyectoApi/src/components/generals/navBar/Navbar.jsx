import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
      </ul>
    </div>
  )
}

export default Navbar