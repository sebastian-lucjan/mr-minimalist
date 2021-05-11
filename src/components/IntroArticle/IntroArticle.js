import { StyledIntroArticle } from 'components/IntroArticle/IntroArticle.styles';
import PropTypes from 'prop-types';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

console.log(AOS);

AOS.init();

export const IntroArticle = ({ text, id, xlSize = false }) => {
  const articleClass = xlSize ? 'articleXlSize' : 'articleMSize';
  const fadeDirection = id % 2 ? 'fade-left' : 'fade-right';

  return (
    <StyledIntroArticle
      data-aos={fadeDirection}
      data-aos-duration="2000"
      className={articleClass}
    >
      {text}
    </StyledIntroArticle>
  );
};

IntroArticle.propTypes = { text: PropTypes.string, xlSize: PropTypes.bool };
