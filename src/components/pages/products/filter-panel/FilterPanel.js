import React, { useState, useRef } from 'react'
import { FilterPanelContainer, Line, List } from './FilterPanel.styles'
import { connect } from 'react-redux'

import { setFilter } from 'redux/products'
import clickOutside from 'helpers/clickOutside'

const FilterPanel = ({ setFilter, show, setShow, brands }) => {
  const [priceRange, setPriceRange] = useState('all')
  const [currentBrand, setCurrentBrand] = useState('brand-all')
  const [sort, setSort] = useState('rating')
  const node = useRef()

  const handlePriceChange = e => {
    if (priceRange === e.target.getAttribute('id')) return

    setPriceRange(e.target.getAttribute('id'))
    setFilter({
      price: e.target.getAttribute('id'),
      sort,
      brand: currentBrand
    })
  }

  const handleSortChange = e => {
    if (sort === e.target.getAttribute('id')) return

    setSort(e.target.getAttribute('id'))
    setFilter({
      price: priceRange,
      sort: e.target.getAttribute('id'),
      brand: currentBrand
    })
  }

  const handleBrandChange = e => {
    if (currentBrand === e.target.getAttribute('id')) return

    setCurrentBrand(e.target.getAttribute('id'))
    setFilter({
      price: priceRange,
      sort,
      brand: e.target.getAttribute('id')
    })
  }

  clickOutside(node, () => setShow(false))

  return (
    <FilterPanelContainer show={show} ref={node}>
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
            checked={priceRange === '201to300'}
            id='201to300'
          />
          <label htmlFor='201to300'>$201 - $300</label>
        </li>
      </List>
      <Line />

      <h3>Brand</h3>
      <List>
        <li key='brand-all'>
          <div>
            <input
              type='checkbox'
              id='brand-all'
              checked={currentBrand === 'brand-all'}
              onChange={handleBrandChange}
            />
            <label htmlFor='brand-all'>All</label>
          </div>
        </li>
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
  )
}

const mapStateToProps = ({ products: { allProducts } }) => {
  const brands = [
    ...new Set(allProducts.map(product => product.brand.toUpperCase()))
  ]
  return {
    brands
  }
}

export default connect(mapStateToProps, { setFilter })(FilterPanel)
