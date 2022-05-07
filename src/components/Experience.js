import React from "react";
import tw from "tailwind-styled-components";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <AboutTopic>What Skill I Have</AboutTopic>
      <h2 className="text-2xl">My Experience</h2>
      <ExperienceContainer>
        <TopicContainer>
          <ExperienceTopic>Frontend Development</ExperienceTopic>
          <ExperienceContent>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>HTML</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>CSS</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>JavaScript</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>Bootstrap</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>Tailwind</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>React</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </TopicContainer>
        <TopicContainer>
          <ExperienceTopic>Backend Development</ExperienceTopic>
          <ExperienceContent>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>Node JS</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>MongoDB</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>PHP</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>MySQL</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckIcon />
              <div>
                <Skill>Python</Skill>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </TopicContainer>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;

const AboutTopic = tw.h5`
    text-sm
`;

const ExperienceContainer = tw.div`
    grid grid-cols-2 gap-8 container lg:grid-cols-1 sm:gap-4
`;

const TopicContainer = tw.div`
  bg-variant p-[2.4rem_5rem] rounded-[2rem] border border-solid border-transparent duration-500
  hover:bg-transparent hover:border-primary-variant lg:w-4/5 lg:p-8 lg:m-[0_auto] sm:p-[2rem_1rem]
  sm:w-full
`;

const ExperienceTopic = tw.h3`
    text-center mb-8 text-primary text-lg
`;

const ExperienceContent = tw.div`
    grid grid-cols-2 gap-y-8 lg:p-4
`;

const ExperienceDetails = tw.article`
    flex gap-4
`;

const Skill = tw.h4`
    p-0
`;

const CheckIcon = tw(BsPatchCheckFill)`
    mt-1.5 text-primary
`;
