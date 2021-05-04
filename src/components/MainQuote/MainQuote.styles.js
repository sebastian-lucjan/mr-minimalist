import styled from 'styled-components';

export const StyledMainQuote = styled.div`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
  text-align: left;
  & div {
    margin: 20px;
  }

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
    margin-bottom: 20px;
  }
`;
