import React from "react";
import Common from "./Common";
import mynewimg from "../src/images/Mynewimg.PNG";

const About = () => {
  return (
    <Common
      name="Welcome to About Page"
      visit="/contact"
      imgsrc={mynewimg}
      alt="No About Image"
      btnname="Contact Now"
    />
  );
};

export default About;
