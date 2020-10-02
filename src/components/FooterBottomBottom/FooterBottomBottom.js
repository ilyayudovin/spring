import React from 'react';
import logo from '../Header/OG-Spring.svg.png';
import youtube from '../../assets/youtube.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';

const FooterBottomBottom = () => (
  <div className="footerBottomBottom">
    <div className="footerBottomBottomContainer">
      <div className="footerBottomBottomContent">
        <img alt="logo" src={logo} />
        <p className="footerBottomBottomLinks">
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
          <img alt="youtube" src={youtube} />
        </a>
        <a href="/#">
          <img alt="github" src={github} />
        </a>
        <a href="/#">
          <img alt="twitter" src={twitter} />
        </a>
      </div>
    </div>
  </div>
);

export default FooterBottomBottom;
