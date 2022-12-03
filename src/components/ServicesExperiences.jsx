import React, {useState} from "react";

function ServicesExperiences(){
    const [services] = useState([
        {
            icon: "fa-paintbrush",
            title: "UI Design",
            desc: "UI design is a new way of thinking about digital interfaces. It's not just about how something looks but how it feels and how it works. We design with the user in mind, creating a delightful experience that is intuitive and easy to use.",
            active: false,
          },
          {
            icon: "fa-pen-to-square",
            title: "product Design",
            desc: "I am a product designer with a passion for designing great products. I love to work with my clients to create the best possible solution for them. I have been designing products for over 15 years and have had the opportunity to work on many challenging and interesting projects.",
            active: true,
          },
          {
            icon: "fa fa-globe",
            title: "Web Developer",
            desc: "We are a team of web developers with more than 10 years of experience. We know how to make your website look good, work well and be easy to maintain. We'll deliver on time and work with you to ensure that the code is optimized.",
            active: false,
          },
    ]);
    return(
        <section className="services-experience">
            <div className="container">
            <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}>
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>2</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>11+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>12+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10+</h4>
              <p>Achievements</p>
               </div>
              </div>
            </div>
        </div>
        </section>
    );
}

export default  ServicesExperiences;