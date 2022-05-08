import React from "react";
import tw from "tailwind-styled-components";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <AboutTopic>What I Offer</AboutTopic>
      <h2 className="text-2xl">Services</h2>
      <ServicesContainer>
        <Service>
          <ServiceHead>
            <ServiceName>UI/UX Design</ServiceName>
          </ServiceHead>
          <ServiceList>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
          </ServiceList>
        </Service>
        {/* END OF UI/UX */}
        <Service>
          <ServiceHead>
            <ServiceName>Web Development</ServiceName>
          </ServiceHead>
          <ServiceList>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
          </ServiceList>
        </Service>
        {/* END OF WEB DEVELOPMENT */}
        <Service>
          <ServiceHead>
            <ServiceName>Web Development</ServiceName>
          </ServiceHead>
          <ServiceList>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
            <List>
              <ServiceIconList />
              <ServiceContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceContent>
            </List>
          </ServiceList>
        </Service>
        {/* END OF CONTENT CREATION */}
      </ServicesContainer>
    </section>
  );
};

export default Services;

const ServicesContainer = tw.div`
    grid grid-cols-3 gap-12 container lg:grid-cols-2 lg:gap-4 sm:grid-cols-1 sm:gap-4
`;

const AboutTopic = tw.h5`
    text-sm
`;

const Service = tw.article`
    bg-variant rounded-[0_0_2rem_2rem] border border-solid border-primary
    h-fit duration-500 hover:bg-primary-variant hover:bg-transparent hover:ursor-default
    lg:h-auto
`;

const ServiceHead = tw.div`
    bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0, 0, 0, 0.1)]
`;

const ServiceName = tw.h3`
    text-color-bg text-base text-center
`;

const ServiceList = tw.ul`
    p-8
`;

const List = tw.li`
    flex gap-4 mb-3.5
`;

const ServiceIconList = tw(BiCheck)`
    text-primary mt-[2px]
`;

const ServiceContent = tw.p`
    text-[0.9rem]
`;
