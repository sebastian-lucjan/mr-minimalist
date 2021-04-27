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
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray};
  }
  h2 {
    margin-top: 10px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    text-align: right;
  }
`;
