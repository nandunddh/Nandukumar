import React from "react";
import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa6";
  
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Passionate web developer with a knack for turning ideas into
                stunning digital experiences. Proficient in front-end and
                back-end technologies, I thrive on creating user-friendly,
                responsive websites that captivate and engage
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated">
                  <Link
                    to="#"
                    style={{ fontSize: "30px", textAlign: "center" }}
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <Link
                    to="#"
                    style={{ fontSize: "30px", textAlign: "center" }}
                  >
                    {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                    <FaInstagram />
                    <i class="fa-brands fa-instagram"></i>
                    {/* <span className="icon-instagram" /> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="https://nandunddh.github.io/Nandukumar/">
                    <span className="icon-long-arrow-right mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#about">
                    <span className="icon-long-arrow-right mr-2" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#services">
                    <span className="icon-long-arrow-right mr-2" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="#Contact">
                    <span className="icon-long-arrow-right mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <Link>
                    <span className="icon-long-arrow-right mr-2" />
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="icon-long-arrow-right mr-2" />
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="icon-long-arrow-right mr-2" />
                    App Development
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="icon-long-arrow-right mr-2" />
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <Link to="tel:919010307021">
                      <span className="icon icon-phone" />
                      <span className="text">+91 9010307021</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon icon-envelope" />
                      <span className="text">nandukumar985@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright ©2023 All rights reserved | @NanduKumar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
