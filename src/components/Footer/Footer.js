import React from 'react';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import { StyledFooter } from 'components/Footer/Footer.styles';

export const Footer = (props) => {
  return (
    <StyledFooter>
      <NavSocialMedia />
    </StyledFooter>
  );
};
