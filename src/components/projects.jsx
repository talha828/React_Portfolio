import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Note Trading App",
      img: "/projects/1.png",
      gLink: "https://github.com/talha828/Notes_Up_Flutter",
      gicon: "fab fa-github",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:"I am a highly trained, quality and security minded developer with a passion for application development. I have been developing applications for over 2 years and have been a part of many successful projects.",
    },
    {
      title: "UI/UX Design",
      img: "/projects/2.jpg",
      gicon: "fab fa-figma",
      gLink: "https://www.figma.com/file/zmP8fOLTWIpwKG1wwx65Gm/NotePlus?node-id=0%3A1&t=wsj8PiL0j5ysFX82-1",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:"I am a bit of an artist,web designer, and interactive developer. I believe that creativity is the best way to express one's personality.I help people express their story and I love working with them on something they can be proud of. ",
    },
    {
      title: "Architechture Design",
      img: "/projects/3.png",
      gicon:  "fa-solid fa-sitemap",
      gLink: "https://miro.com/app/board/uXjVPa4i-bI=/",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:"I am a passionate, creative designer that is inspired by architecture. I love to learn and I am looking for new opportunities to explore. love to work with a team of people. love to teach and guide ",

    },
    {
      title: "Social App",
      img: "/projects/4.png",
      gicon: "fab fa-github",
      gLink: "https://github.com/talha828/Uni-Chat-App",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:"I am always looking to develop new ideas and technologies and push the boundaries of what is possible. My current project is a social media app that allows users to connect with each other in unique ways and create meaningful relationships. I am excited to see what this app can do for people and how it can make a positive impact on their lives.",

    },
    {
      title: "Front End Development",
      img: "/projects/5.png",
      gicon: "fab fa-github",
      gLink: "https://github.com/talha828/flutte_web_portfolio",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:" I'm passionate about creating websites that are both user-friendly and visually appealing. I'm always looking for new ways to improve my skills and stay up-to-date on the latest technologies. My goal is to create websites that are easy to use, yet have a modern and attractive design. I'm also experienced in developing mobile-friendly websites and applications for various platforms.",

    },
    {
      title: "Freelancing",
      img: "/projects/6.jpg",
      gicon: "fab fa-github",
      gLink: "https://www.fiverr.com/share/lkwzjR",
      lLink: "https://www.linkedin.com/in/talha-iqbal-371aa5229/",
      text:"I'm a freelance product designer with a passion for creating innovative and user-friendly products. I have over 10 years of experience in product design, having worked in-house for some of the biggest companies in the industry. I'm a strong believer in the power of collaboration, and I strive to create products that meet the needs of both the users and the business. My expertise includes UX/UI design, product development, prototyping, and testing.",

    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/talha828"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className={project.gicon}></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <p>
              {project.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects