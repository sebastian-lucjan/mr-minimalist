import React from 'react';
import styled from 'styled-components';

const StyledMainView = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const MainView = (props) => {
  return <StyledMainView>{props.children}</StyledMainView>;
};

MainView.propTypes = {};
