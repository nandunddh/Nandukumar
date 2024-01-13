import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillMail, AiOutlineGlobal } from "react-icons/ai";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    // handleContactSubmit();
  }, [email, subject, message]);

  const handleContactSubmit = () => {
    // e.preventDefault();
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nandugoud113@gmail.com",
        Password: "F4FABCEB0E22863BDFE3071769A9CC89161D",
        Port: 2525,
        To: "nandukumar985@gmail.com",
        From: "nandugoud113@gmail.com",
        Subject: "TEST ",
        Body: "message",
        // From: email,
        // Subject: subject,
        // Body: message,
      })
        .then(
          // if(message == "")
          // console.log(email, subject, message),
          (message) => alert(message)
        )
        .catch((error) => console.error(error));

      // console.log(name, email, subject, message);
    }
  };
  return (
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
                  3-26, Narkhda, Shamshabad, RR.Dist, Telangana, India 501218
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
                  <Link to="tel://9010307021" className="text-white">
                    +91 9010307021
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane" />
                  <AiFillMail style={{ fontSize: "40px", color: "#ffbd39" }} />
                </div>
                <h4 className="mb-4">Email Address</h4>
                <p>
                  <Link
                    to="mailto:nandukumar985@gmail.com"
                    className="text-white"
                  >
                    nandukumar985@gmail.com
                  </Link>
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
                  <Link to="#" className="text-white strike">
                    <del>updated Soon</del>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutters block-9">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <form
                className="bg-light p-4 p-md-5 contact-form"
                onSubmit={handleContactSubmit}
              >
                <div className="form-group py-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group py-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group py-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
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
                    onChange={(e) => setMessage(e.target.value)}
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
      </div>
    </div>
  );
};

export default Contact;
