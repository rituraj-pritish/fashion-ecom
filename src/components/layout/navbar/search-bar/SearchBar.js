import React, { useRef, useEffect } from 'react';
import clickOutside from '../../../../helpers/clickOutside';

import { SearchBarContainer } from './SearchBar.styles';

const SearchBar = ({
  showSearchBar,
  setShowSearchBar,
  handleSearch,
  searchQuery,
  setSearchQuery
}) => {
  const node = useRef();

  useEffect(
    () => () => {
      setSearchQuery('');
    },
    [showSearchBar]
  );

  const focusInput = e => {
    if (e) {
      e.focus();
    }
  };

  clickOutside(node, () => setShowSearchBar(false));
  return (
    <SearchBarContainer ref={node} show={showSearchBar} onSubmit={handleSearch}>
      <input
        type='text'
        ref={focusInput}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button>
        <i className='fas fa-search' />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
