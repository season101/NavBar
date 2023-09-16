import React, { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import logo from './logo.svg';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  //   const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          //   ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar;
