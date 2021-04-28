import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1280px;
`;

export const StyledMainQuote = styled.div`
  display: block;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 50%;
  text-align: left;

  h1,
  h2 {
    display: block;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    /* font-size: 1.6rem; */
  }

  h2 {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.gray};
    text-align: right;
  }
`;
