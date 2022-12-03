import React from "react";

function Header(){
    return (
        <header>
          <div className='header-inner'>
            <span className="logo">Talha Iqbal</span>
            <div className='links'>
              <a className='link' href='#banner'>Home</a>
              <a className='link' href='#services'>Services</a>
              <a className='link' href='#experiences'>Expreince</a>
              <a className='link' href='#projects'>Projects</a>
            </div>
          </div>
      </header>
    );
}

export default Header;