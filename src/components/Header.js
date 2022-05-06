import React from "react";
import tw from "tailwind-styled-components";
import ME from "../assets/me.png";
import CV from "../assets/cv.pdf";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <h5>Hello, I'm</h5>
        <Name>Preecha Mungmongkon</Name>
        <h5 className="text-light">Fullstack Developer</h5>

        <Cta>
          <DownloadCV href={CV} download>
            Download CV
          </DownloadCV>

          <LetTalk href="#contact">Let's Talk</LetTalk>
        </Cta>

        <HeaderSocials>
          <a href="https://linkedin.com" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
          <a href="https://dribbble.com" target="_blank">
            <FiDribbble />
          </a>
        </HeaderSocials>

        <Me>
          <img src={ME} alt="" />
        </Me>

        <ScrollDown href="#contact">Scroll Down</ScrollDown>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;

const Name = tw.h1`
  text-3xl
  p-2
`;

const HeaderSection = tw.header`
  h-screen
  pt-28
  overflow-hidden
  sm:h-screen
`;

const HeaderContainer = tw.div`
  container
  text-center
  h-full
  relative
`;

const Me = tw.div`
  w-80
  h-30
  absolute
  left-[calc(50%_-_10rem)]
  mt-16
  overflow-hidden
  rounded-t-full
  p-6
  pt-20
  bg-gradient-to-b
  from-primary
`;

const Cta = tw.div`
  flex
  mt-10
  gap-5
  justify-center
`;

const DownloadCV = tw.a`
  btn
`;

const LetTalk = tw.a`
  btn
  btn-primary
`;

const HeaderSocials = tw.div`
  flex
  flex-col
  items-center
  gap-6
  absolute
  left-0
  bottom-12
  sm:hidden
  after:content-['']
  after:w-px
  after:h-8
  after:bg-primary
`;

const ScrollDown = tw.a`
  absolute
  -right-7
  bottom-20
  rotate-90
  font-extralight
  text-sm
  sm:hidden
`;
