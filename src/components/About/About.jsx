import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography><p>This is a sample quote</p></Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://i.pinimg.com/736x/70/58/fc/7058fcfb01c3fc82f49512ba247f1301.jpg" alt="Lucky" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           Lucky
          </Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
           I am a student
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
           I am learning webD...
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;