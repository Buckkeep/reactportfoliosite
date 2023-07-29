import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="http://www.instagram.com"><InstagramIcon /></a> 
        <a href="http://www.twitter.com"><TwitterIcon /></a> 
        <a href="http://www.facebook.com"><FacebookIcon /></a> 
        <a href="http://www.linkedin.com"><LinkedInIcon /></a> 
      </div>
      <p> &copy; 2023 Carlos Polo</p>
      <p><a id="credit" target="_blank" href="https://icons8.com/icon/b3EFsmGYNiSl/xbox-controller">Controller</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
  );
}

export default Footer;
