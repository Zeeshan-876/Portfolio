import React from "react";
import "./App.css";
import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-bold ">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((currvalu, ind) => {
                return (
                  <Card
                    key={ind}
                    crdimg={currvalu.myimg}
                    title={currvalu.title}
                    text={currvalu.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
