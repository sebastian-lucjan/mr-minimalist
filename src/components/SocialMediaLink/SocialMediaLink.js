import { StyledImg } from 'components/NavSocialMedia/NavSocialMedia.styles';
import { StyledNavSocialMediaLink } from 'components/SocialMediaLink/StyledSocialMediaLink';
import React from 'react';

export const SocialMediaLink = ({ url, index, alt, src }) => {
  return (
    <StyledNavSocialMediaLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImg key={index} src={src} url={url} alt={alt} />
    </StyledNavSocialMediaLink>
  );
};
