import "./Project.css";
import React from "react";
import Img1 from "../../assets/2022-10-26.png";
import Img2 from "../../assets/project2.png";
import Img3 from "../../assets/Zomato.png";
import Img4 from "../../assets/travilla.png";

export const Project = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={Img1} alt="" />
          </div>
          <h3>BestBuys Clone Website</h3>
          <h5>
            Best Buy Co. Inc. is an American multinational consumer electronics
            retailer
          </h5>
          <div className="portfolio__items-content">
            <h4 style={{ color: `var(--color-primary)` }}>Tech Stack</h4>
            <span>: HTML ,CSS and JavaScript</span>
          </div>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Piryanshu88/racial-squirrel-7776"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://coruscating-zabaione-3c9f3a.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Bath and Body Works Clone </h3>
          <h5>
            Best Buy Co. Inc. is an American multinational consumer electronics
            retailer
          </h5>
          <div className="portfolio__items-content">
            <h4 style={{ color: `var(--color-primary)` }}>Tech Stack</h4>
            <h4>: HTML ,JavaScript ,React and Chakra UI</h4>
          </div>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Piryanshu88/Bath_and_Body_Works_Clone/tree/main/bath_body_works"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://startling-pegasus-d1ab05.netlify.app/#"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Zomato Clone</h3>
          <h5>
            Zomato is an Indian multinational restaurant aggregator and food
            delivery company founded by Deepinder Goyal and Pankaj Chaddah in
            2008. Zomato provides information, menus and user-reviews of
            restaurants as well as food delivery options from partner
            restaurants in select cities. As of 2019, the service is available
            in 24 countries and in more than 10,000 cities.
          </h5>
          <div className="portfolio__items-content">
            <h4 style={{ color: `var(--color-primary)` }}>Tech Stack</h4>
            <span>: React, CSS3 and JavaScript</span>
          </div>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Piryanshu88/Zomato-React-Clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://super-cascaron-c023f8.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={Img4} alt="" />
          </div>
          <h3>Tripvillas Clone</h3>
          <h5>
            Tripvillas is one of Asia's largest Holiday Home Rental Companies.
            The company was founded in late 2009 by Roshan D'Silva when looking
            for ways to generate additional income from Coffee Plantations owned
            by his family in India. Inspired by Craigslist, Roshan set out to
            create a simple website where owners of private homes could create a
            simple profile for their property and then correspond with like
            minded families who would be interested in staying in their homes as
            an alternate to hotels.
          </h5>
          <div className="portfolio__items-content">
            <h4 style={{ color: `var(--color-primary)` }}>Tech Stack</h4>
            <span>: React Js ,CSS3,Chakra UI and React-Redux </span>
          </div>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Sunilrath101/annoying-wing-980"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://travilla.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
