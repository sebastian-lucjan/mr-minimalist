import styled from 'styled-components';

export const StyledIntroSection = styled.section`
  margin: 80px 20px 0px;
  display: grid;
  row-gap: 40px;
  max-width: 1280px;

  & :nth-child(even) {
    justify-self: center;
  }
  & :nth-child(1) {
    justify-self: center;
  }
  & :nth-child(2) {
    justify-self: right;
  }
`;
