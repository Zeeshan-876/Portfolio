import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-4 col-10 max-auto">
      <div className="card">
        <img
          src={props.crdimg}
          style={{ height: "400px", width: "400px" }}
          className="card-img-top img-fluid"
          alt="Check img extension"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <NavLink to="" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
