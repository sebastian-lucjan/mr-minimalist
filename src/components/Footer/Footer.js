import React, { useState, useEffect } from 'react';
import { NavSocialMedia } from 'components/NavSocialMedia/NavSocialMedia';
import { StyledFooter } from 'components/Footer/Footer.styles';
import { BackArrow } from 'components/BackArrow/BackArrow';

export const Footer = () => {
  const [pageYOffsetNum, setPageYOffsetNum] = useState(0);

  const handleScroll = (e) => {
    console.log(e);
    setPageYOffsetNum(window.pageYOffset);
    console.log(window.pageYOffset);
    // debugger;
  };

  useEffect(() => {
    console.log('test');
    document.addEventListener('mousewheel', handleScroll);
    return document.removeEventListener('scroll', handleScroll);
  }, [pageYOffsetNum]);
  // }, [pageYOffset]);

  return (
    <StyledFooter>
      <NavSocialMedia />
      {pageYOffsetNum > 100 ? <BackArrow /> : null}
      {/* <BackArrow /> */}
    </StyledFooter>
  );
};
