import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 60px calc(100vh - 60px) auto 60px;
`;
