import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialMedia(props) {
  const { platform, link } = props;
  return (
    <div className="flex items-center ">
    <Link  to={link}>

         {(platform === "facebook") && <FaInstagram />}
         {(platform === "twitter") && <FaTwitter />}
         {(platform === "linkedin") && <FaLinkedin />}
         {(platform === "github") && <FaGithub />}

      
    </Link>
    </div>
  );
}
