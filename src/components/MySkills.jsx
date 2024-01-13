import React from "react";

const MySkills = () => {
  return (
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
  );
};

export default MySkills;
