import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
    return (
      <div className="footer">
        <div>
          <Typography variant="h5">About Me</Typography>
          <Typography>
           Hi everyone this is me Lucky....
          </Typography>
  
          <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
          </Link>
        </div>
        <div>
          <Typography variant="h6">Social Media</Typography>
          <a href="https://github.com/lucky1551/" target="black">
            <BsGithub />
          </a>
    
          <a href="https://www.linkedin.com/in/lucky-182803201/" target="black">
            <BsLinkedin />
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;