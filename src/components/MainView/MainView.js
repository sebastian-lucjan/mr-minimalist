import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainView = styled.main`
  /* height: 200vh; */
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
`;

export const MainView = (props) => {
  return <StyledMainView>{props.children}</StyledMainView>;
};

MainView.propTypes = {};
