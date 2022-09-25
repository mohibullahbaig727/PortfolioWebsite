import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__item">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>Porfolio Item Title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
