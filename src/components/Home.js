import React from "react";
// import profileimage from "../images/profileimage.png";
// import aboutme from '../images/aboutme.jpg'
import footerImage from "../assets/footer-image.jpg";
import resume from "../assets/pdfs/Cv-Resume.pdf";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import About from "./About";
import Academics from "./Academics";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import MySkills from "./MySkills";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="containerfulid bg-dark">
        <div
          id="bannner"
          className="carousel slide mb-5 pt-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner container">
            <div className="carousel-item active">
              <div className="bg-dark w-100 h-100">
                <div className="pt-5 text-warning">
                  <div className="row">
                    <div className="col-sm-12 mb-5 text-center">
                      <p className="text-uppercase fw-bold ">Hello!</p>
                      <p className="text-white fw-bold display-2">
                        I'm a <span className="text-warning">web designer</span>
                        <br />
                        <span className="text-white fs-3">
                          & <br />{" "}
                        </span>
                        <span className="text-white"> Mern </span>
                        <span className="text-warning"> stack developer</span>
                      </p>
                      <button className="btn btn-warning fw-bold fs-6 rounded-pill py-3 px-4 mt-md-5">
                        <Link
                          to={resume}
                          target="_blank"
                          download="Nandu-Resume"
                          rel="noreferrer"
                        >
                          Download CV
                        </Link>
                      </button>
                      <button className="ms-3 fw-bold fs-6 rounded-pill py-3 px-4 btn btn-outline-light contact-me mt-md-5">
                        <Link
                          to="https://api.whatsapp.com/send?phone=919010307021&text=Hello I would like to contact!&message=Hi Nandu"
                          target="_blank"
                        >
                          Contact Me
                        </Link>
                      </button>
                    </div>
                    {/* <div className="col-sm-4">
                      <img
                        src={profileimage}
                        alt="Profile image"
                        className="profileimage"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <p>
                I'm{" "}
                <span>
                  Nandu
                  <br />
                  Kumar
                </span>
              </p>
              <p>A Freelance Web Desigenr</p>
            </div>
            <div className="carousel-item">
              <p>Hello2</p>
            </div>
          </div>
        </div>

        <About />
        <Academics />
        <Services />
        <MySkills />
        <section
          className="ftco-section ftco-hireme img margin-top"
          style={{ backgroundImage: `url(${footerImage})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center fadeInUp ftco-animated py-5">
                <h2 className="fw-bold display-6 text-white mb-5">
                  I'm <span className="text-warning">Available</span> for
                  freelancing
                </h2>
                <p className="my-3">
                  <Link
                    to="#Contact"
                    className="btn btn-warning px-4 py-3 fw-bold rounded-pill text-uppercase"
                  >
                    Hire me
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
