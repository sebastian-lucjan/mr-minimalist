import { Logo } from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: grid;
  /* margin-top: 10px; */
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const Header = (props) => {
  return (
    <Wrapper>
      <Logo logoText={props.logoText} />

      <Navigation navigationButtons={props.navigationButtons} />
    </Wrapper>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  navigationButtons: PropTypes.array.isRequired,
};
