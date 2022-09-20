import React, { useRef, useEffect } from 'react';
import clickOutside from '../../../../helpers/clickOutside';

import { SearchBarContainer } from './SearchBar.styles';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import Icon from '../../../../atoms/Icon';

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
    // eslint-disable-next-line
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
        <Icon size='18px'>
          <SearchIcon />
        </Icon>
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
