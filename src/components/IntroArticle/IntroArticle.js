import { StyledIntroArticle } from 'components/IntroArticle/IntroArticle.styles';
import PropTypes from 'prop-types';
import React from 'react';

export const IntroArticle = ({ text, xlSize = false }) => {
  const articleClass = xlSize ? 'articleXlSize' : 'articleMSize';
  console.log(articleClass);

  return (
    <StyledIntroArticle className={articleClass}>{text}</StyledIntroArticle>
  );
};

IntroArticle.propTypes = { text: PropTypes.string, xlSize: PropTypes.bool };
