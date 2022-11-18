import React from 'react';
import { GiOpenTreasureChest } from 'react-icons/gi';
import { ImTruck } from 'react-icons/im';
import { HiTicket } from 'react-icons/hi';

import './_cardsAbout.scss';

const CardsAbout = () => {
  return (
    <div className="cards-about">
      <div className="cards-about-wrap container">
        <div className="card">
          <GiOpenTreasureChest />
          <h3>Inventory Blowout Sale !</h3>
          <p>
            Save big on your cooling with Smart Qube. <br />
            New units are added daily !
          </p>
        </div>
        <div className="card">
          <ImTruck />
          <h3>Quickest Lead-times in the Industry</h3>
          <p>
            Get the gihgest of quality in your hands fast with out Quote and
            Quick Ship Program. Select products ship in 24 hours!
          </p>
        </div>
        <div className="card">
          <HiTicket />
          <h3>Get a Quick Quote Today !</h3>
          <p>
            Need pricing quick? Call Smart Qube Sales at +48 697-77-17-90 for a
            quick quoe and get pricing in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsAbout;
