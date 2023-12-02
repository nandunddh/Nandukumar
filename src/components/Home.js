import React from "react";
import profileimage from "../images/profileimage.png";
// import aboutme from '../images/aboutme.jpg'
import footerImage from "../assets/footer-image.jpg";
import resume from "../assets/pdfs/Cv-Resume.pdf";
import {
  FaInstagram,
  FaLinkedin,
  FaMapLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { AiFillMail, AiOutlineGlobal } from "react-icons/ai";
import { MdDeveloperMode, MdOutlineMonitor } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";

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
                        I'm a{" "}
                        <span className="text-warning">
                          web <br />
                          designer{" "}
                          <span className="text-white">
                            & <br /> Mern{" "}
                          </span>{" "}
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
                      <button className="ms-3 fw-bold fs-6 rounded-pill py-3 px-4 contact-me">
                        <a href="https://api.whatsapp.com/send?phone=919010307021">Contact Me</a>
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

        <div className="container bg-dark my-5 py-4 about" id="about">
          <div className="row text-white">
            {/* <div className="col-sm-5 align-self-center me-5">
              <img
                src={aboutme}
                alt="About Me image"
                width="100%"
                className="rounded-5 about-image"
              />
            </div> */}
            <div className="text-center">
              <p className="big bigresume text-center">About</p>
              <p className="fs-1 fw-bold text-center">About Me</p>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-8">
              <p className="fs-5 pt-3 aboutdesc text-justify text-center">
                Hello, I'm Nandu Kumar and I work as a web developer.
                <br />I have been working as a web developer. I believe I am a
                very ambitious person who loves to work on making the website
                work well. Working on the web is my passion as I love to work on
                exciting projects.
              </p>
              <div className="row pt-4">
                <div className="col-sm-4">
                  <p className="fw-bold fs-5">Name:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">P.NanduKumar Goud</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p className="fw-bold fs-5">Date of birth:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">March 30, 2001</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p className="fw-bold fs-5">Address:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">Hyderbad, Telangana, India</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p className="fw-bold fs-5">Zip code:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">501218</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p className="fw-bold fs-5">Email:</p>
                </div>
                <div className="col-sm-auto">
                  <p className="fs-5 aboutdesc">nandukumar985@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
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
        <div className="container bg-dark resume" id="academics">
          <div className="text-white">
            <div className="text-center">
              <p className="big bigresume text-center">Academics</p>
              <p className="fs-1 fw-bold">Academics</p>
              {/* <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p> */}
            </div>
            <div className="row pb-5">
              <div className="col-sm-6 py-4">
                <div className="bg-lightshade rounded">
                  <h1 className="text-warning fw-bold">2015-2016</h1>
                  <h1 className="">Secondary School</h1>
                  <h6 className="color-gray fw-bold">
                    OASIS SCHOOL OF EXCELLENCE
                  </h6>
                  <h6 className="color-gray fw-bold">8.7 CGPA</h6>
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
                  <h6 className="color-gray fw-bold text-uppercase">7.4 GPA</h6>
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
                  <h6 className="color-gray fw-bold pb-4">
                    Henry Harvin Education{" "}
                  </h6>

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
        <div className="container bg-dark resume" id="services">
          <div className="text-white">
            <div className="text-center">
              <p className="big bigresume text-center">Services</p>
              <p className="fs-1 fw-bold">Services</p>
              {/* <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p> */}
            </div>
            <div className="row pb-5">
              <div className="col-sm-3 py-4 ">
                <div className="bg-lightshade rounded services">
                  {/* <span class="icon">
                    <i class="flaticon-analysis"></i>
                  </span> */}
                  <MdOutlineMonitor className="service-icon" />
                  <h3 className="fw-bold text-uppercase fs-5">Web Design</h3>
                </div>
              </div>
              <div className="col-sm-3 py-4 ">
                <div className="bg-lightshade rounded services">
                  {/* <span class="icon">
                    <i class="flaticon-analysis"></i>
                  </span> */}
                  <CgWebsite className="service-icon" />
                  <h3 className="fw-bold text-uppercase fs-5">
                    Web Development
                  </h3>
                </div>
              </div>
              <div className="col-sm-3 py-4 ">
                <div className="bg-lightshade rounded services">
                  {/* <span class="icon">
                    <i class="flaticon-analysis"></i>
                  </span> */}
                  <MdDeveloperMode className="service-icon" />
                  <h3 className="fw-bold text-uppercase fs-5">
                    App Development
                  </h3>
                </div>
              </div>
              <div className="col-sm-3 py-4 ">
                <div className="bg-lightshade rounded services">
                  {/* <span class="icon">
                    <i class="flaticon-analysis"></i>
                  </span> */}
                  <SiTaichigraphics className="service-icon" />
                  <h3 className="fw-bold text-uppercase fs-5">
                    Graphic Design
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-dark resume" id="My Skills">
          <div className="text-white">
            <div className="text-center">
              <p className="big bigresume text-center">My Skills</p>
              <p className="fs-1 fw-bold">My Skills</p>
              {/* <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p> */}
            </div>
            <div className="row pb-5">
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>HTML</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>85%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "85%", color: "#fff" }}
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>CSS</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>65%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "65%", color: "#fff" }}
                  >
                    65%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>70%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "70%", color: "#fff" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>BOOTSTRAP</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>75%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "75%", color: "#fff" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>REACT NATIVE</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>50%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "50%", color: "#fff" }}
                  >
                    50%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>REACT JS</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>80%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "80%", color: "#fff" }}
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>NODE JS</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>60%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%", color: "#fff" }}
                  >
                    60%
                  </div>
                </div>
              </div>
              <div className="col-sm-6 py-4 ">
                <div className="row">
                  <div className="col fs-4 fw-500">
                    <p>PHP</p>
                  </div>
                  <div className="col fs-4 fw-500 text-end">
                    <p>40%</p>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%", color: "#fff" }}
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <a
                    href="#Contact"
                    className="btn btn-warning px-4 py-3 fw-bold rounded-pill text-uppercase"
                  >
                    Hire me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container bg-dark resume" id="Contact">
          <div className="text-white">
            <div className="text-center pb-5 mt-5">
              <p className="big bigresume text-center">Contact Me</p>
              <p className="fs-1 fw-bold">Contact Me</p>
              {/* <p className="fs-5 pt-3 aboutdesc">
                A small river named Nandu flows by their place and suppliest it
                witth the necessary regelialia.
              </p> */}
            </div>
            <div>
              <div className="row d-flex contact-info mb-5 contact-section">
                <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      {/* <span className="icon-map-signs" /> */}
                      <FaMapLocationDot
                        style={{ fontSize: "40px", color: "#ffbd39" }}
                      />
                    </div>
                    <h4 className="mb-4">Address</h4>
                    <p>
                      3-26, Narkhda, Shamshabad, RR.Dist, Telangana, India
                      501218
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-phone2" />
                      <FaPhone style={{ fontSize: "40px", color: "#ffbd39" }} />
                    </div>
                    <h4 className="mb-4">Contact Number</h4>
                    <p>
                      <a href="tel://9010307021" className="text-white">
                        +91 9010307021
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-paper-plane" />
                      <AiFillMail
                        style={{ fontSize: "40px", color: "#ffbd39" }}
                      />
                    </div>
                    <h4 className="mb-4">Email Address</h4>
                    <p>
                      <a
                        href="mailto:nandukumar985@gmail.com"
                        className="text-white"
                      >
                        nandukumar985@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-globe" />
                      <AiOutlineGlobal
                        style={{ fontSize: "40px", color: "#ffbd39" }}
                      />
                    </div>
                    <h4 className="mb-4">Website</h4>
                    <p>
                      <a href="#" className="text-white strike">
                        <del>updated Soon</del>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row no-gutters block-9">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                  <form action="#" className="bg-light p-4 p-md-5 contact-form">
                    <div className="form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group py-3">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-warning px-4 py-3 fw-bold rounded-pill text-uppercase"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <footer className="ftco-footer ftco-section">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">About</h2>
                      <p>
                        Passionate web developer with a knack for turning ideas
                        into stunning digital experiences. Proficient in
                        front-end and back-end technologies, I thrive on
                        creating user-friendly, responsive websites that
                        captivate and engage
                      </p>
                      <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                        <li className="ftco-animate fadeInUp ftco-animated">
                          <a
                            href="#"
                            style={{ fontSize: "30px", textAlign: "center" }}
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li className="ftco-animate fadeInUp ftco-animated">
                          <a
                            href="#"
                            style={{ fontSize: "30px", textAlign: "center" }}
                          >
                            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                            <FaInstagram />
                            <i class="fa-brands fa-instagram"></i>
                            {/* <span className="icon-instagram" /> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-4">
                      <h2 className="ftco-heading-2">Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://nandunddh.github.io/Nandukumar/">
                            <span className="icon-long-arrow-right mr-2" />
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about">
                            <span className="icon-long-arrow-right mr-2" />
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#services">
                            <span className="icon-long-arrow-right mr-2" />
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-long-arrow-right mr-2" />
                            Projects
                          </a>
                        </li>
                        <li>
                          <a href="#Contact">
                            <span className="icon-long-arrow-right mr-2" />
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">Services</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a>
                            <span className="icon-long-arrow-right mr-2" />
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="icon-long-arrow-right mr-2" />
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="icon-long-arrow-right mr-2" />
                            App Development
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="icon-long-arrow-right mr-2" />
                            Graphic Design
                          </a>
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
                            <a href="#">
                              <span className="icon icon-phone" />
                              <span className="text">+91 9010307021</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon icon-envelope" />
                              <span className="text">
                                nandukumar985@gmail.com
                              </span>
                            </a>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
