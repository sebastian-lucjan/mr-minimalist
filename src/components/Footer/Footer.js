import React from 'react';
import PropTypes from 'prop-types';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  grid-area: footer;
`;

export const Footer = (props) => {
  return (
    <StyledFooter>
      <NavSocialMedia />
    </StyledFooter>
  );
};

Footer.propTypes = {};
