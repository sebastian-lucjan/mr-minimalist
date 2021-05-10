import React, { useState, useEffect } from 'react';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import { StyledFooter } from 'components/Footer/Footer.styles';
import { BackArrow } from 'components/BackArrow/BackArrow';

export const Footer = () => {
  const [pageYOffset, setPageYOffset] = useState(0);

  const handleScroll = () => {
    setPageYOffset(window.pageYOffset);
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', handleScroll);
  }, [pageYOffset]);

  console.log('test');

  return (
    <StyledFooter>
      <NavSocialMedia />
      {pageYOffset > 100 ? <BackArrow /> : null}
    </StyledFooter>
  );
};
