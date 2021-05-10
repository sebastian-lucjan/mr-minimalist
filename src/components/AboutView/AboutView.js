import React, { useContext } from 'react';
import { ViewWrapper } from 'components/ViewWrapper/ViewWrapper';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';
import { StyledAboutView } from 'components/AboutView/AboutView.styles';

export const AboutView = () => {
  const { aboutText } = useContext(DataContext);

  return (
    <ViewWrapper>
      <StyledAboutView>
        <h1>{aboutText}</h1>
      </StyledAboutView>
    </ViewWrapper>
  );
};
