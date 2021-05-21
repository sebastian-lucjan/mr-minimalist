import { StyledNavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia.styles';
import { SocialMediaLink } from 'components/SocialMediaLink/SocialMediaLink';
import { socialMediaObj } from 'data/socialMediaData';
import React from 'react';

export const NavSocialMedia = () => {
  return (
    <>
      <StyledNavSocialMedia>
        {socialMediaObj.map(({ icon, url, alt }, index) => (
          <SocialMediaLink key={index} src={icon} url={url} alt={alt} />
        ))}
      </StyledNavSocialMedia>
    </>
  );
};
