import React from "react";
import tw from "tailwind-styled-components";

import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-sm">What I Offer</h5>
      <h2 className="text-2xl">Services</h2>

      <PortfolioContainer>
        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG1} alt="" />
          </PortfolioItemImage>

          <PortfolioName>This is a portfolio item title</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG2} alt="" />
          </PortfolioItemImage>

          <PortfolioName>Layout Archive</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG3} alt="" />
          </PortfolioItemImage>

          <PortfolioName>NFT Marketplace Website</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG4} alt="" />
          </PortfolioItemImage>

          <PortfolioName>Galapagos.ai — Website Homepage UI/UX 1</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG5} alt="" />
          </PortfolioItemImage>

          <PortfolioName>Natural material motion app</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemImage>
            <img src={IMG6} alt="" />
          </PortfolioItemImage>

          <PortfolioName>UNFTart Mobile APP</PortfolioName>
          <PortfolioItemCta>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortfolioItemCta>
        </PortfolioItem>
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;

const PortfolioContainer = tw.div`
    container grid grid-cols-3 gap-10 lg:grid-cols-2 lg:gap-[1.2rem] sm:grid-cols-1 sm:gap-4
`;

const PortfolioItem = tw.article`
    bg-variant p-[1.3rem] rounded-[2rem] border border-solid border-transparent duration-500
    hover:border-primary-variant hover:bg-transparent
`;

const PortfolioItemImage = tw.div`
    rounded-[1.5rem] overflow-hidden
`;

const PortfolioName = tw.h3`
    m-[1.2rem_0_2rem] font-medium text-lg
`;

const PortfolioItemCta = tw.div`
    flex gap-4 mb-4
`;
