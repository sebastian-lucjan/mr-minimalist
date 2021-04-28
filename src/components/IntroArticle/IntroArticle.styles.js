import styled from 'styled-components';

export const StyledIntroArticle = styled.article`
  /* left: 20px; */
  bottom: 20px;
  text-align: left;

  &.articleXlSize {
    width: 50%;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 80px 0 20px;
  }
  &.articleMSize {
    width: 35%;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 20px 0 120px;
  }
`;
