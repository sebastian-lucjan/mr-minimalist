import { IntroArticle } from 'components/IntroArticle/IntroArticle';
import { StyledIntroSection } from 'components/IntroSection/IntroSection.styles';
import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';

export const IntroSection = () => {
  const { mainPageTexts } = useContext(DataContext);

  const introArticlesTexts = Object.values(mainPageTexts);
  console.log(introArticlesTexts);

  const introArticles = introArticlesTexts.map((text, id) => (
    <IntroArticle key={id} id={id} text={text} xlSize={!(id % 2)} />
  ));

  return <StyledIntroSection>{introArticles}</StyledIntroSection>;
};
