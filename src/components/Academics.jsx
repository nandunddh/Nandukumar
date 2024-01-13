import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdfs/Cv-Resume.pdf";

const Academics = () => {
  return (
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
              <h6 className="color-gray fw-bold">OASIS SCHOOL OF EXCELLENCE</h6>
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
              <h1 className="text-warning fw-bold">August 2022-October 2022</h1>
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
    </div>
  );
};

export default Academics;
