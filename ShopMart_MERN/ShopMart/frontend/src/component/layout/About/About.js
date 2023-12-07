import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from '../../../images/ShopMart.jpeg';
import MetaData from "../../layout/MetaData";
const About = () => {

  return (

    <div className="about">
      <MetaData title="ABOUT US" />
      <div></div>
      <div className="about1">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img className="photo" src={logo} alt="Logo" />
            <Typography component="h2">ShopMart</Typography>

            <span>
              <p>
                Welcome to ShopMart online grocery store, where convenience meets magic. Picture this – you think of something you need at home, and it's at your doorstep before you even finish tying your shoelaces. We're reshaping the landscape of e-commerce, ensuring that the essentials in your life are just a click away.
              </p>
              <b>
                Our Vision: 100x Growth in the Next Five Years
              </b>
              <p> </p>
              <p>
                Proudly standing as one of the largest e-grocery companies in India, our ambition knows no bounds. We're not satisfied with the present; we're reaching for exponential growth – aiming to be 100 times our current size in the next five years.
              </p>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;