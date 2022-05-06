import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNave, setActiveNav] = useState("#");

  return (
    <NavContainer>
      <Icon
        href="#"
        onClick={() => setActiveNav("#")}
        $active={activeNave === "#"}
      >
        <AiOutlineHome />
      </Icon>
      <Icon
        href="#about"
        onClick={() => setActiveNav("#about")}
        $active={activeNave === "#about"}
      >
        <AiOutlineUser />
      </Icon>
      <Icon
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        $active={activeNave === "#experience"}
      >
        <BiBook />
      </Icon>
      <Icon
        href="#services"
        onClick={() => setActiveNav("#services")}
        $active={activeNave === "#services"}
      >
        <RiServiceLine />
      </Icon>
      <Icon
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        $active={activeNave === "#contact"}
      >
        <BiMessageSquareDetail />
      </Icon>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = tw.nav`
    bg-black-rgba
    w-max
    block
    py-2
    px-7
    z-10
    fixed
    left-1/2
    -translate-x-1/2
    bottom-10
    flex
    gap-2
    rounded-full
    backdrop-blur-md
`;

const Icon = tw.a`
    bg-transparent
    rounded-full
    p-4
    flex
    text-light
    text-base
    ${(p) => (p.$active ? "bg-primary text-color-bg" : "hover:bg-black-rgba")}
`;
