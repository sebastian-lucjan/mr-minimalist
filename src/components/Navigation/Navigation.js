import PropTypes from 'prop-types';
import Button from 'components/NavButton/NavButton';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  margin-right: 20px;
`;

const Navigation = ({ navigationButtons }) => {
  const navButtons = navigationButtons.map((navButon, index) => (
    <Button key={index} title={navButon} />
  ));

  return <Wrapper>{navButtons}</Wrapper>;
};

Navigation.propTypes = { navigationButtons: PropTypes.array.isRequired };

export default Navigation;
