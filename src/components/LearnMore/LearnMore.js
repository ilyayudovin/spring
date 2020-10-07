import React from 'react';
import learnMoreInfo from '../../LearnMoreInfo.json';
import LearnMoreThird from '../LearnMoreThird/LearnMoreThird';

const LearnMore = () => (
  <div className="learnMoreContainer">
    {
      learnMoreInfo.map((section) => (
        <LearnMoreThird
          key={section.name}
          name={section.name}
          text={section.text}
          link={section.link}
        />
      ))
    }
  </div>
);

export default LearnMore;
