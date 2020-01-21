import React from 'react';
import { FilterPanelContainer, Line, List } from './FilterPanel.styles';

const FilterPanel = ({ products }) => {
  //to get unique values
  const brands = [...new Set(products.map(p => p.brand.toUpperCase()))];

  return (
    <FilterPanelContainer>
      <h2>
        <i className='fas fa-filter' />
        Filter
      </h2>
      <Line />

      <h3>Price</h3>
      <List>
        <li>$5 - $50</li>
        <li>$51 - $100</li>
        <li>$101 - $150</li>
        <li>$151 - $200</li>
        <li>$200 - $300</li>
      </List>
      <Line />

      <h3>Brand</h3>
      <List>
        {brands.map(brand => (
          <li>{brand}</li>
        ))}
      </List>
      <Line />
    </FilterPanelContainer>
  );
};

export default FilterPanel;
