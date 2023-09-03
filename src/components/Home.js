import React from 'react'
import profileimage from '../images/profileimage.png'

const Home = () => {
  return (
    <>
      <div className="containerfulid bg-dark">
        <div
          id="carouselExampleSlidesOnly"
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
                        Download CV
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

        <div className="container bg-dark my-5 py-4 about">
          <div className="row text-white">
            <div className="col-sm-5"></div>
            <div className="col-sm-7">
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
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
        <div className="container bg-dark my-5 py-5 resume">
          <div className="text-white">
            <div className="text-center">
              <p className="big bigresume text-center">Resume</p>
              <p className="fs-1 fw-bold">Resume</p>
              <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p>
            </div>
            <div className="row pb-5">
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">SSC - High School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold my-3">
                    A small river named Nandu flows by their place and suppliest
                    it witth the necessary regelialia. A small river named Nandu
                    flows by their place and suppliest it witth the necessary
                    regelialia.
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">SSC - High School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold my-3">
                    A small river named Nandu flows by their place and suppliest
                    it witth the necessary regelialia. A small river named Nandu
                    flows by their place and suppliest it witth the necessary
                    regelialia.
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">SSC - High School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold my-3">
                    A small river named Nandu flows by their place and suppliest
                    it witth the necessary regelialia. A small river named Nandu
                    flows by their place and suppliest it witth the necessary
                    regelialia.
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">SSC - High School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold my-3">
                    A small river named Nandu flows by their place and suppliest
                    it witth the necessary regelialia. A small river named Nandu
                    flows by their place and suppliest it witth the necessary
                    regelialia.
                  </h6>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-warning px-4 py-3 fw-bold rounded-pill">
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-dark py-5 resume">
          <h1 className='text-white text-center border border-white'> Remaning Will be updated Soon...</h1>
        </div>
      </div>
    </>
  )
}

export default Home
