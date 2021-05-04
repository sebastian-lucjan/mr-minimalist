import styled from 'styled-components';

export const StyledIntroSection = styled.section`
  padding: 80px 20px 0px;
  display: grid;
  row-gap: 40px;
  /* display: block; */
  /* height: 2000px; */
  grid-area: intro;
  /* height: 100%; */
  /* max-width: 1280px; */

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
