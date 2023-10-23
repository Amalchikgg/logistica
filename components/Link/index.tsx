"use client";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  title: string;
  link: string;
  className: string;
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LinkScroll = ({ title, link, className, onClick }: Props) => {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      to={link}
      className={className}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default LinkScroll;
