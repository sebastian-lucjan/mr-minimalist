import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';

export const StyledButton = styled(NavLink).attrs({ activeClassName })`
  display: block;
  border: none;
  border-radius: 0;
  color: white;
  margin: 20px 5px;
  background-color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  &:last-child {
    margin: 20px 0px 20px 5px;
  }
  &::after {
    display: block;
    content: '';
    transform: translateX(-100%);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    transition: 0.2s;
  }
  &:hover {
    &::after {
      transform: translateX(0%);
    }
  }

  &.active-link {
    position: relative;
  }
  &.active-link::before {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    transform: translateX(0%);
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray};
    transition: 0.2s;
  }
`;
