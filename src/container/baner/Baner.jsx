import React from 'react';
import './_Baner.scss';

const Baner = () => {
  return (
    <section className="baner">
      <div className="baner-wraper container">
        <div className="baner-text">
          <h3>Highest Operating Ambient Temperature AC Unit in the Industry</h3>
          <h1>EV series</h1>
          <p>Avaliable in three key industry categories</p>
          <ul>
            <li>NEMA Type 12, 3R, 4, and 4X</li>
            <li>Zone 2-CIZ2CID 2 ATEX/IECEx/AEx/EXIP66</li>
            <li>CID 2</li>
          </ul>
        </div>
        <div className="image-wrap">
          <img
            src="https://www.iceqube.com/wp-content/uploads/2022/01/EV_Series-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Baner;
