import React from 'react';
import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';

import './_Navigation.scss';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = ['about SmartQube', 'Contact Us'];

  return (
    <div className="navbar">
      <div className="navbar-links">
        {navLinks.map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <div
            className="navbar-hamburger"
            onClick={() => setToggleMenu(false)}
          >
            <p>Close</p>
            <RiCloseCircleFill />
            {toggleMenu && (
              <ul className="hamburger-wrap">
                {navLinks.map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="navbar-hamburger" onClick={() => setToggleMenu(true)}>
            <p>Menu</p>
            <GiHamburgerMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
