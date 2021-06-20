import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="hdr-pad col-md-5 order-2 order-lg-1 offset-1 offset-md-1 main-div2">
                  <h1>
                    {props.name}
                    <strong style={{ color: "blue" }}>
                      <br />
                      Zeeshan Alamgir
                    </strong>
                  </h1>
                  <h4
                    className="my-3 hdr-pad"
                    style={{ color: "#484848", fontSize: "24px" }}
                  >
                    We are the team of telented developers making websites.
                  </h4>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="get-started-btn">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="home-about__img hdr-pad col-lg-3 order-1 order-lg-2 img-fluid header-img offset-md-3">
                  <img
                    src={props.imgsrc}
                    height="450px"
                    width="400px"
                    alt={props.ext}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
