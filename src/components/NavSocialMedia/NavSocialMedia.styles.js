import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledNavSocialMedia = styled.nav`
  display: flex;
  height: 100%;
  margin-left: 20px;
`;

export const StyledImg = styled.img`
  height: 20px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

StyledImg.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
