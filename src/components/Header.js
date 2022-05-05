import React from "react";
import tw from "tailwind-styled-components";
import ME from "../assets/me.png";
import CV from "../assets/cv.pdf";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <h5>Hello, I'm</h5>
        <h1>Preecha Mungmongkon</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <Cta>
          <DownloadCV href={CV} download>
            Download CV
          </DownloadCV>

          <LetTalk href="#contact">
            Let's Talk
          </LetTalk>
        </Cta>

        <Me>
          <img src={ME} alt="" />
        </Me>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = tw.div`
    h-screen
    pt-28
    overflow-hidden
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
    bg-gradient-to-b from-primary
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
