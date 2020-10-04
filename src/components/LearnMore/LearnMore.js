import React from 'react';
import learnMoreInfo from '../../LearnMoreInfo.json';
import LearnMoreThird from '../LearnMoreThird/LearnMoreThird';

const LearnMore = () => (
  <div className="LearnMore">
    <div className="LearnMoreContainer">
      {
        learnMoreInfo.map((section, index) => <LearnMoreThird key={learnMoreInfo[index].name} name={section.name} text={section.text} link={section.link} />)
      }
    </div>
  </div>
);

export default LearnMore;
