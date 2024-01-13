import React from "react";
import resume from "../assets/pdfs/Cv-Resume.pdf";
import { Link } from "react-router-dom";

const About = () => {
  return (
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
            <br />I have been working as a web developer. I believe I am a very
            ambitious person who loves to work on making the website work well.
            Working on the web is my passion as I love to work on exciting
            projects.
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
            <Link
              to={resume}
              target="_blank"
              download="Nandu-Resume"
              rel="noreferrer"
            >
              Download CV
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
