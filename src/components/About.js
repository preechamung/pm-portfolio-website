import React from "react";
import tw from "tailwind-styled-components";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <AboutTopic>Get To Know</AboutTopic>
      <h2 className="text-2xl">About Me</h2>
      <AboutContainer>
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt="About Image" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <AboutCard>
              <AboutIcon>
                <FaAward />
              </AboutIcon>
              <AboutTopic>Experience</AboutTopic>
              <AboutDescription>3+ Years Working</AboutDescription>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <FiUsers />
              </AboutIcon>
              <AboutTopic>Clients</AboutTopic>
              <AboutDescription>200+ Worldwide</AboutDescription>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <VscFolderLibrary />
              </AboutIcon>
              <AboutTopic>Projects</AboutTopic>
              <AboutDescription>80+ Completed</AboutDescription>
            </AboutCard>
          </AboutCards>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </Content>
          <LetTalkButton href="#contact">
            Let's Talk
          </LetTalkButton>
        </AboutContent>
      </AboutContainer>
    </section>
  );
};

export default About;

const AboutContainer = tw.div`
  grid
  grid-cols-[35%_50%]
  gap-[15%]
  container
`;

const AboutMe = tw.div`
  w-full
  aspect-square
  rounded-[2rem]
  primary-lig
  grid
  place-items-center
`;

const AboutMeImage = tw.div`
  rounded-[2rem]
  rotate-[10deg]
  overflow-hidden
  hover:rotate-0
  duration-500
`;

const AboutContent = tw.div`
`;

const Content = tw.p`
  m-[2rem_0_2.6rem]
  text-light
`;

const AboutCards = tw.div`
  grid
  grid-cols-3
  gap-6
`;

const AboutCard = tw.article`
  bg-variant
  rounded-2xl
  p-8
  text-center
  duration-500
  border
  border-solid
  border-transparent
  hover:bg-transparent
  hover:border-primary-variant
`;

const AboutIcon = tw.div`
  flex
  justify-center
  text-primary
  mt-4
  text-2xl
  text-center
  mb-2
`;

const AboutTopic = tw.h5`
    text-sm
`;

const AboutDescription = tw.small`
  text-xs text-light
`;

const LetTalkButton = tw.a`
  btn btn-primary
`;
