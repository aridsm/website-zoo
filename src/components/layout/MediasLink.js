import React from "react";
import classes from "./MediaLinks.module.css";

import { ReactComponent as IconFacebook } from "../../assets/facebook.svg";
import { ReactComponent as IconInstagram } from "../../assets/instagram.svg";
import { ReactComponent as IconYoutube } from "../../assets/youtube.svg";
const MediasLink = () => {
  return (
    <address className={classes.media}>
      <a href="/">
        <IconFacebook />
      </a>
      <a href="/">
        <IconInstagram />
      </a>
      <a href="/">
        <IconYoutube />
      </a>
    </address>
  );
};

export default MediasLink;
