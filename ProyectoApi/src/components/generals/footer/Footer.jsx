import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-secondary-subtle'>
      <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        </ul>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link to="/*" className="text-body-secondary"><i className="bi bi-instagram"></i></Link></li>
          <li className="ms-3"><Link to="/*" className="text-body-secondary"><i className="bi bi-facebook"></i></Link></li>
          <li className="ms-3"><Link to="/*" className="text-body-secondary"><i className="bi bi-github"></i></Link></li>
        </ul>
        </footer>
      </div>
    </div>
  )
}

export default Footer