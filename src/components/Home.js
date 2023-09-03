import React from 'react'
import profileimage from '../images/profileimage.png'
// import aboutme from '../images/aboutme.jpg'
import aboutme from '../images/about-us.jpg'
import resume from '../assets/pdfs/Cv-Resume.pdf'

const Home = () => {
  return (
    <>
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
                    <div className="col-sm-8 mb-5">
                      <p className="text-uppercase fw-bold">Hello!</p>
                      <p className="text-white fw-bold display-2">
                        I'm a{' '}
                        <span className="text-warning">
                          web <br />
                          designer{' '}
                          <span className="text-white">
                            & <br /> Mern{' '}
                          </span>{' '}
                          stack developer
                        </span>
                      </p>
                      <button className="btn btn-warning fw-bold fs-6 rounded-pill py-3 px-4">
                        <a
                          href={resume}
                          target="_blank"
                          download="Nandu-Resume"
                          rel="noreferrer"
                        >
                          Download CV
                        </a>
                      </button>
                      <button className="ms-3 btn btn-outline-light fw-bold fs-6 rounded-pill py-3 px-4">
                        Contact Me
                      </button>
                    </div>
                    <div className="col-sm-4">
                      <img
                        src={profileimage}
                        alt="Profile image"
                        className="profileimage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <p>
                I'm{' '}
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

        <div className="container bg-dark my-5 py-4 about" id="about">
          <div className="row text-white">
            <div className="col-sm-5 align-self-center me-5">
              <img
                src={aboutme}
                alt="About Me image"
                width="100%"
                className="rounded-5 about-image"
              />
            </div>
            <div className="col-sm-6 ps-4">
              <p className="big">About</p>
              <p className="fs-1 fw-bold ps-3">About Me</p>
              <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Name:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">P.NanduKumar Goud</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Date of birth:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">March 30, 2001</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Address:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">Hyderbad, Telangana, India</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Zip code:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">501218</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Email:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">nandukumar985@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="fw-bold fs-5">Phone:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">+91 9010307021</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-warning fs-4 fw-bold">
                  6 <span className="text-white">Project's complete</span>
                </p>
              </div>
              <button className="mt-2 btn-warning text-dark px-4 py-3 rounded-pill border-0 fw-bold">
                <a
                  href={resume}
                  target="_blank"
                  download="Nandu-Resume"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="container bg-dark my-5 py-5 resume" id="Academics">
          <div className="text-white">
            <div className="text-center">
              <p className="big bigresume text-center">Academics</p>
              <p className="fs-1 fw-bold">Academics</p>
              <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p>
            </div>
            <div className="row pb-5">
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">Secondary School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold">
                    8.7 CGPA
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2016-2019</h1>
                  <h1 className="">Diploma In Computer's</h1>
                  <h6 className="color-gray fw-bold text-uppercase text-justify">
                    TRR College of Technology
                  </h6>
                  <h6 className="color-gray fw-bold text-uppercase text-justify">
                    77%
                  </h6>
                  {/* <h6 className="color-gray fw-bold my-3">
                    A Diploma in Computer Engineering is a diploma programme
                    that provides fundamental knowledge on computer science,
                    mathematics and computing techniques and engineering
                    concepts.
                  </h6> */}
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2019-2022</h1>
                  <h1 className="">B.Tech - Computer Science Engineering</h1>
                  <h6 className="color-gray fw-bold text-uppercase">
                    J.B. Institute of Engineering & Technology
                  </h6>
                  <h6 className="color-gray fw-bold text-uppercase">
                    7.4 GPA
                  </h6>
                  {/* <h6 className="color-gray fw-bold my-3 text-justify">
                    B.Tech (CSE) is a 4 year undergraduate course offering
                    specialization in computer programming languages and
                    computer system technologies.
                  </h6> */}
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">
                    August 2022-October 2022
                  </h1>
                  <h1 className="">MERN Stack Web Development Course</h1>
                  <h6 className="color-gray fw-bold pb-4">Henry Harvin Education </h6>
                
                  {/* <h6 className="color-gray fw-bold my-3 text-justify">
                    MERN stack is the most in-demand Full Stack Web Development
                    structure. It helps in the enhancement of Applications. MERN
                    Stack covers both back-end and front-end servers and equips
                    the learner with the advantage of using a single programming
                    language i.e JavaScript, making it the most effective Web
                    Development process.
                  </h6> */}
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-warning px-4 py-3 fw-bold rounded-pill">
                  <a
                    href={resume}
                    target="_blank"
                    download="Nandu-Resume"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-dark pb-5 resume">
          <h1 className="text-white text-center border border-white">
            {' '}
            Remaning Will be updated Soon...
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
