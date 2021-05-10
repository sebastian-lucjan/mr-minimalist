import React, { useContext } from 'react';
import { ViewWrapper } from 'components/ViewWrapper/ViewWrapper';
import { StyledContactView } from 'components/ContactView/ContactView.styles';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';

export const ContactView = () => {
  const {
    contactTexts: { mail, phoneNumber },
  } = useContext(DataContext);

  return (
    <ViewWrapper>
      <StyledContactView className={'contactContent'}>
        <h1>{mail}</h1>
        <h2>{phoneNumber}</h2>
      </StyledContactView>
    </ViewWrapper>
  );
};
