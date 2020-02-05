import React from 'react';
import { StyledCollectionContainer } from './Collection.styles';
import CollectionItem from './CollectionItem';

import col1 from '../../../../assets/images/col1.jpg';
import col2 from '../../../../assets/images/col2.jpg';
import col3 from '../../../../assets/images/col3.jpg';

const CollectionContainer = () => {
  return (
    <StyledCollectionContainer>
      <CollectionItem imageUrl={col1} title='New from POLO' />
      <CollectionItem imageUrl={col3} title='Trending Watches' />
      <CollectionItem imageUrl={col2} title='New from ZARA' />
    </StyledCollectionContainer>
  );
};

export default CollectionContainer;
