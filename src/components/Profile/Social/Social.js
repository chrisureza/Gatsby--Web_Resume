import React from 'react';

import { ReactComponent as IcWeb } from '../../../images/icons/web.svg';
import { ReactComponent as IcLinkedIn } from '../../../images/icons/linkedin.svg';
import { ReactComponent as IcFacebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as IcInstagram } from '../../../images/icons/instagram.svg';
import { ReactComponent as IcTwitter } from '../../../images/icons/twitter.svg';

import './Social.scss';

const Social = () => {
  const socialMedia = [
    {
      icon: <IcWeb />,
      link: "https://chrisureza.com",
    },
    {
      icon: <IcLinkedIn />,
      link: "https://www.linkedin.com/in/chrisureza/",
    },
    {
      icon: <IcFacebook />,
      link: "https://www.facebook.com/chrisureza/",
    },
    {
      icon: <IcInstagram />,
      link: "https://www.instagram.com/chrisureza/",
    },
    {
      icon: <IcTwitter />,
      link: "https://twitter.com/chrisureza",
    },
  ];

  return (
    <div className="social">
      {socialMedia.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer noopener">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;