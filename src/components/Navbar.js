import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark py-3" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand text-white fs-3 fw-bold" to="/">
          ND
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav justify-content-end bg-dark fs-5 fw-800 collapse navbar-collapse" id="navbarSupportedContent">
          <li className="nav-item">
            <Link
              className="nav-link active text-warning"
              aria-current="page"
              to="/#home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="about">
              About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="/#academics">
            Academics
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="/#services">
              Services
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="/#My Skills">
              Skills
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="#">
              Projects
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link text-white" to="Contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
