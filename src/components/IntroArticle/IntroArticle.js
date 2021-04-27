import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import StyledIntroArticle from 'components/IntroArticle/IntroArticle.styles';

const StyledIntroArticle = styled.article`
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
export const IntroArticle = ({ text, xlSize = false }) => {
  const articleClass = xlSize ? 'articleXlSize' : 'articleMSize';
  console.log(articleClass);

  return (
    <StyledIntroArticle className={articleClass}>{text}</StyledIntroArticle>
  );
};

IntroArticle.propTypes = {};
