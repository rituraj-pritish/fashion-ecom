import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../../ui/Background';
import {
  StyledCollectionItem,
  StyledTitle,
  StyledCollectionContent
} from './Collection.styles';

const CollectionItem = ({ imageUrl, title }) => {
  return (
    <Link to='/products/sale'>
      <StyledCollectionItem>
        <Background url={imageUrl} className='col-bg' />
        <StyledCollectionContent>
          <StyledTitle>{title}</StyledTitle>
        </StyledCollectionContent>
      </StyledCollectionItem>
    </Link>
  );
};

export default CollectionItem;
