import React, { useState } from 'react';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import { StyledFooter } from 'components/Footer/Footer.styles';
import { BackArrow } from 'components/BackArrow/BackArrow';

export const Footer = () => {
  const [pageY, setPageY] = useState(0);

  const handleBackClick = () => {
    console.log('handleBackClick');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => setPageY(window.pageYOffset);

  window.onscroll = handleScroll;

  return (
    <StyledFooter>
      <NavSocialMedia />
      {pageY ? <BackArrow onClick={handleBackClick} /> : null}
    </StyledFooter>
  );
};
