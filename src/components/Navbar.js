import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand text-white fs-3 fw-bold" to="#banner">
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
              to="#banner"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
