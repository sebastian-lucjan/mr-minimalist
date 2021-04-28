import styled from 'styled-components';

export const StyledUsageInfo = styled.aside`
  position: absolute;
  top: 50%;
  right: 0;
  transform: rotate(270deg);
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.gray};

  cursor: default;
  user-select: none;
`;
