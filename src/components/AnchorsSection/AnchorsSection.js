import React from 'react';
import './AnchorsSection.scss';
import AnchorsList from '../AnchorsList/AnchorsList';

const AnchorsSection = () => (
  <section className="footerContainer">
    <div className="footerContent">
      <h2>Projects in the Attic</h2>
      <AnchorsList />
    </div>
  </section>
);

export default AnchorsSection;
