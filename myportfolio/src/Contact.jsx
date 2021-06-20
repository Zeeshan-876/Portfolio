import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    myname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.myname},${data.phone},${data.email},${data.message}`);
  };
  return (
    <div>
      <div className="my-3 text-center">
        <h1 className="fw-bold">Contact Us</h1>
      </div>
      <div className="row ">
        <div className="col-md-6 col-10 mx-auto">
          <form action="" onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={InputEvent}
                name="myname"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                onChange={InputEvent}
                name="phone"
                placeholder="mobile number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={InputEvent}
                name="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                name="message"
                onChange={InputEvent}
              ></textarea>
            </div>
            <button className="btn btn-outline-primary">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
