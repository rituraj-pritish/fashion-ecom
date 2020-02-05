import React from 'react';

import Background from '../../../common/Background';
import {
  StyledCollectionItem,
  StyledTitle,
  StyledCollectionContent
} from './Collection.styles';

const CollectionItem = ({ imageUrl, title }) => {
  return (
    <StyledCollectionItem>
      <Background url={imageUrl} className='col-bg' />
      <StyledCollectionContent>
        <StyledTitle>{title}</StyledTitle>
      </StyledCollectionContent>
    </StyledCollectionItem>
  );
};

export default CollectionItem;
