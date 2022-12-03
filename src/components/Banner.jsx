import React from "react";

function Banner(){
    return(
        <section className="banner" id="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="banner-img">
                        <img src="/mobil.svg" alt=""/>
                    </div>
                    <div className="banner-content">
                        <h6>Hello, I`m Talha Iqbal</h6>
                        <h3>Application Developer</h3>
                        <p>
                        We are a team of highly skilled and experienced developers, who have been building
                         quality hybrid applications for more than 2 years. We have successfully completed 
                         more than 20 projects, covering a wide range of industries. We are looking for a
                         opportunity to prove our-self.
                        </p>
                        <a className="btn" href="#projects">About Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;