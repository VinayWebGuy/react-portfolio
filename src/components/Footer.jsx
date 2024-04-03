import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  SITE_NAME,
} from "./../../data";

const Footer = () => {
  return (
    <footer className="flex h-12 border-t border-zinc-200 items-center justify-between px-4 sm:px-6 lg:px-[60px] text-xs sm:text-sm">
      <span className="font-bold">
        © 2024 {SITE_NAME} | All rights reserved
      </span>

      <div className="flex gap-3">
        <a
          href={FACEBOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaFacebookF />
        </a>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href={GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaGithub />
        </a>
        <a
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
