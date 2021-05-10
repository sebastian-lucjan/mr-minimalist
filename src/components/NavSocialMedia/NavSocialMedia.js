import behanceIcon from 'assets/icons/behance-logo.png';
import fbIcon from 'assets/icons/facebook-circular-logo.png';
import instaIcon from 'assets/icons/instagram.png';
import { StyledNavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia.styles';
import React from 'react';

export const NavSocialMedia = (props) => {
  return (
    <>
      <StyledNavSocialMedia>
        <img src={fbIcon} alt="facebook" />
        <img src={instaIcon} alt="instagram" />
        <img src={behanceIcon} alt="behance" />
      </StyledNavSocialMedia>
    </>
  );
};

NavSocialMedia.propTypes = {};
