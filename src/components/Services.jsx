import React from "react";
import { MdDeveloperMode, MdOutlineMonitor } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";


const Services = () => {
  return (
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
              <h3 className="fw-bold text-uppercase fs-5">Web Development</h3>
            </div>
          </div>
          <div className="col-sm-3 py-4 ">
            <div className="bg-lightshade rounded services">
              {/* <span class="icon">
              <i class="flaticon-analysis"></i>
            </span> */}
              <MdDeveloperMode className="service-icon" />
              <h3 className="fw-bold text-uppercase fs-5">App Development</h3>
            </div>
          </div>
          <div className="col-sm-3 py-4 ">
            <div className="bg-lightshade rounded services">
              {/* <span class="icon">
              <i class="flaticon-analysis"></i>
            </span> */}
              <SiTaichigraphics className="service-icon" />
              <h3 className="fw-bold text-uppercase fs-5">Graphic Design</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
