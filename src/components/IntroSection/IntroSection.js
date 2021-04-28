import { IntroArticle } from 'components/IntroArticle/IntroArticle';
import { StyledIntroSection } from 'components/IntroSection/IntroSection.styles';
import PropTypes from 'prop-types';
import React from 'react';

export const IntroSection = ({ introTextsObj }) => {
  // const articles = [];
  const {
    intro,
    textUnderIntro,
    purposeIntroText,
    purposeText,
    minimalismRulesOne,
    minimalismRulesTwo,
    importantThings,
  } = introTextsObj;

  console.log(intro);
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

IntroSection.propTypes = {
  introTextsObj: PropTypes.object,
};
// export const introTextsObj= {
//   intro:
//     "My name is Sebastian. I'm based in Lublin, Poland, but I work with the whole world.",
//   textUnderIntro:
//     'Using the minimalism and aesthetics I help projects and businesses achieve their goals.',
//   purposeIntroText: 'The purpose of my work',
//   purposeText:
//     'Clean and aesthetic design immediately inspires confidence in people and users become more loyal to the brand on first visiting.',
//   minimalismRules: [
//     'In minimalism functionality always comes first. Every detail works for the final result.',
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//   socialMedia: ['behance', 'facebook', 'instagram'],
//   socialMedia: ['behance', 'facebook', 'instagram'],
//   socialMedia: ['behance', 'facebook', 'instagram'],
//   footerNav: ['main', 'about', 'contact'],
// },
// };
