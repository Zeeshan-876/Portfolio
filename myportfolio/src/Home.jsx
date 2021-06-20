import React from "react";
import Common from "./Common";
import mynewimg from "./images/Mynewimg.PNG";

const Home = () => {
  return (
    <div>
      <Common
        name="Grow your bussiness with"
        visit="/services"
        imgsrc={mynewimg}
        alt="No Home image"
        btnname="Get Started"
      />
    </div>
  );
};

export default Home;
