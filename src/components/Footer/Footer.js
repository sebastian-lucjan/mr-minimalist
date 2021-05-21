import { BackArrow } from 'components/BackArrow/BackArrow';
import { StyledFooter } from 'components/Footer/Footer.styles';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import React, { useState } from 'react';

export const Footer = () => {
  const [pageY, setPageY] = useState(0);

  const handleBackClick = () => {
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
