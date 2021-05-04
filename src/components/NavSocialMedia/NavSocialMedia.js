import React from 'react';
// import PropTypes from 'prop-types';
// import React from 'react';

import { StyledNavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia.styles';
import fbIcon from 'assets/icons/facebook-circular-logo.png';
import instaIcon from 'assets/icons/instagram.png';
import behanceIcon from 'assets/icons/behance-logo.png';
import { BackArrow } from 'components/BackArrow/BackArrow';

export const NavSocialMedia = (props) => {
  return (
    <>
      <StyledNavSocialMedia>
        <img src={fbIcon} alt="facebook" />
        <img src={instaIcon} alt="instagram" />
        <img src={behanceIcon} alt="behance" />
      </StyledNavSocialMedia>
      <BackArrow />
    </>
  );
};

NavSocialMedia.propTypes = {};
