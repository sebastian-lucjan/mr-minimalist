import styled from 'styled-components';

export const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: 300;
  margin-left: 30px;
  text-align: left;
  font-family: 'Work sans';

  cursor: default;
  user-select: none;
`;
