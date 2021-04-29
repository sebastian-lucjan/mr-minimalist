import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  border: none;
  border-radius: 0;
  color: white;
  height: 40px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
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
`;
