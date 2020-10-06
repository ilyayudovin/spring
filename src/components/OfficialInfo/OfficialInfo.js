import React from 'react';
import logo from '../Navigation/OG-Spring.svg.png';
import youtubeIcon from '../../assets/youtube.png';
import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';

const OfficialInfo = () => (
    <div className="officialInfoContainer">
      <div className="officialInfoContent">
        <img alt="logo" src={logo} />
        <p className="officialInfoLinks">
          © 2020 VMware, Inc. or its affiliates. Terms of Use • Privacy • Trademark Guidelines
        </p>
        <p>
          Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks
          or registered trademarks of the Apache Software Foundation in the United States and/or other
          countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its
          affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States
          and other countries. Linux® is the registered trademark of Linus Torvalds in the United States
          and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft
          Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of
          Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their
          respective owners and are only mentioned for informative purposes. Other names may be trademarks
          of their respective owners.
        </p>
      </div>
      <div className="iconLinks">
        <a href="/#">
          <img alt="youtube" src={youtubeIcon} />
        </a>
        <a href="/#">
          <img alt="github" src={githubIcon} />
        </a>
        <a href="/#">
          <img alt="twitter" src={twitterIcon} />
        </a>
      </div>
    </div>
);

export default OfficialInfo;
