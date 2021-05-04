import { IntroArticle } from 'components/IntroArticle/IntroArticle';
import { StyledIntroSection } from 'components/IntroSection/IntroSection.styles';
import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';

export const IntroSection = () => {
  const { introTextsObj } = useContext(DataContext);

  const {
    intro,
    textUnderIntro,
    purposeIntroText,
    purposeText,
    minimalismRulesOne,
    minimalismRulesTwo,
    importantThings,
  } = introTextsObj;

  return (
    <StyledIntroSection>
      <IntroArticle text={intro} xlSize />
      <IntroArticle text={textUnderIntro} />
      <IntroArticle text={purposeIntroText} xlSize />
      <IntroArticle text={purposeText} />
      <IntroArticle text={minimalismRulesOne} />
      <IntroArticle text={minimalismRulesTwo} xlSize />
      <IntroArticle text={importantThings} />
    </StyledIntroSection>
  );
};
