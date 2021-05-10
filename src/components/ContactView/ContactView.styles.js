import styled from 'styled-components';

export const StyledContactView = styled.div`
  display: block;
  width: 40%;
  text-align: left;

  h1,
  h2 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
