import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Talha.</span>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100017060403794">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/talha828" >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/talha-iqbal-371aa5229/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          React Profolio
        </p>
      </div>
    </footer>
  );
}

export default Footer;