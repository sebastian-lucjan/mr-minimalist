import styled from 'styled-components';

export const StyledAboutView = styled.div`
  display: block;
  width: 60%;
  text-align: left;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
  }
`;
