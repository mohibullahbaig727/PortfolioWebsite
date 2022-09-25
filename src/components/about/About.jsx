import React from "react";
import "./about.css";
import ProfileImage from "../../assets/person1.png";
import { GiAchievement } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Who is</h5>
      <h2>MOHIB</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfileImage} alt="mohib" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiAchievement className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300</small>
            </article>

            <article className="about__card">
              <MdOutlineLibraryAddCheck className="about__icon" />
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            corrupti, quibusdam nesciunt possimus vero iure voluptates amet a
            officia sapiente voluptatem, optio ducimus facere voluptas velit.
            Soluta voluptatibus, cumque quod consectetur necessitatibus adipisci
            nobis libero deleniti dicta, numquam voluptas explicabo.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
