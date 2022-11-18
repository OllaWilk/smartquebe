import React from 'react';
import { Navigation } from '../index';
import { Logo } from '../../components/index';

import './_Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrap">
        <Logo />
        <div className="header-links_wrap">
          <div className="header-contact">
            <h4>
              Sales: <span>+48 665-132-360 </span>
            </h4>
            <h4>
              Office: <span>+48 697-717-790</span>
            </h4>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
