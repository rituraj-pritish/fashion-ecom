import React, { useState, useEffect } from 'react';
import { FilterPanelContainer, Line, List } from './FilterPanel.styles';
import { connect } from 'react-redux';

import { applyFilter } from '../../../../redux/actions/userActions';

const FilterPanel = ({ items, applyFilter }) => {
  //to get unique values
  const brands = [...new Set(items.map(p => p.brand.toUpperCase()))];

  const [priceRange, setPriceRange] = useState('all');
  const [currentBrand, setCurrentBrand] = useState('all');
  const [sort, setSort] = useState('rating');

  useEffect(() => {
    applyFilter('sort', 'rating');
  }, []);

  const handlePriceChange = e => {
    if (priceRange === e.target.getAttribute('id')) return;

    setPriceRange(e.target.getAttribute('id'));
    applyFilter('priceRange', e.target.getAttribute('id'));
  };

  const handleSortChange = e => {
    if (sort === e.target.getAttribute('id')) return;

    setSort(e.target.getAttribute('id'));
    applyFilter('sort', e.target.getAttribute('id'));
  };

  const handleBrandChange = e => {
    if (currentBrand === e.target.getAttribute('id')) return;

    setCurrentBrand(e.target.getAttribute('id'));
    applyFilter('brand', e.target.getAttribute('id'));
  };

  return (
    <FilterPanelContainer>
      <h2>
        <i className='fas fa-filter' />
        Filter
      </h2>
      <Line />

      <h3>Sort By</h3>
      <List>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handleSortChange}
              id='rating'
              checked={sort === 'rating'}
            />
            <label htmlFor='rating'>Rating</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handleSortChange}
              id='priceLtoH'
              checked={sort === 'priceLtoH'}
            />
            <label htmlFor='priceLtoH'>Price: Low to High</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handleSortChange}
              id='priceHtoL'
              checked={sort === 'priceHtoL'}
            />
            <label htmlFor='priceHtoL'>Price: High to Low</label>
          </div>
        </li>
      </List>
      <Line />

      <h3>Price</h3>
      <List>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handlePriceChange}
              checked={priceRange === 'all'}
              id='all'
            />
            <label htmlFor='all'>All</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handlePriceChange}
              checked={priceRange === '5to50'}
              id='5to50'
            />
            <label htmlFor='5to50'>$5 - $50</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handlePriceChange}
              checked={priceRange === '51to100'}
              id='51to100'
            />
            <label htmlFor='51to100'>$51 - $100</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handlePriceChange}
              checked={priceRange === '101to150'}
              id='101to150'
            />
            <label htmlFor='101to150'>$101 - $150</label>
          </div>
        </li>
        <li>
          <div>
            <input
              type='checkbox'
              onChange={handlePriceChange}
              checked={priceRange === '151to200'}
              id='151to200'
            />
            <label htmlFor='151to200'>$151 - $200</label>
          </div>
        </li>
        <li>
          <input
            type='checkbox'
            onChange={handlePriceChange}
            checked={priceRange === '200to300'}
            id='200to300'
          />
          <label htmlFor='200to300'>$200 - $300</label>
        </li>
      </List>
      <Line />

      <h3>Brand</h3>
      <List>
        {brands.map(brand => (
          <li key={brand}>
            <div>
              <input
                type='checkbox'
                id={brand}
                checked={currentBrand === brand}
                onChange={handleBrandChange}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          </li>
        ))}
      </List>
      <Line />
    </FilterPanelContainer>
  );
};

export default connect(null, { applyFilter })(FilterPanel);
