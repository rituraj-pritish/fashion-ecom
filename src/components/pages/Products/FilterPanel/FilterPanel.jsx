import React, { useState, useRef, useEffect } from 'react'
import {
  FilterPanelContainer,
  Line,
  List,
  FilterBtnContainer
} from './FilterPanel.styles'

import clickOutside from 'helpers/clickOutside'
import Icon from 'components/ui/Icon'
import PriceSlider from './PriceSlider'
import BarsIcon from 'assets/icons/BarsIcon'
import { FilterBtn } from './FilterPanel.styles'

const FilterPanel = ({ setFilterCriteria, brands, setOverlay, currency }) => {
  const [show, setShow] = useState(false)
  const [currentBrand, setCurrentBrand] = useState('brand-all')
  const [sort, setSort] = useState('rating')
  const node = useRef()

  useEffect(
    () => () => {
      // reset filter criteria
      setFilterCriteria({
        sort: 'all',
        price: 'all',
        brand: 'brand-all'
      })
    },
    [setFilterCriteria]
  )

  const handleClick = () => {
    setShow(!show)
    setOverlay(true)
  }

  const handleSortChange = e => {
    if (sort === e.target.getAttribute('id')) return

    setSort(e.target.getAttribute('id'))
    setFilterCriteria({
      sort: e.target.getAttribute('id')
    })
  }

  const handleBrandChange = e => {
    if (currentBrand === e.target.getAttribute('id')) return

    setCurrentBrand(e.target.getAttribute('id'))
    setFilterCriteria({
      brand: e.target.getAttribute('id')
    })
  }

  clickOutside(node, () => setShow(false))

  return (
    <div>
      <FilterBtnContainer>
        <FilterBtn onClick={handleClick}>
          <Icon display='inline-block' width='15px'>
            <BarsIcon />
          </Icon>{' '}
          Filter
        </FilterBtn>
      </FilterBtnContainer>
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
          <PriceSlider />
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
    </div>
  )
}

export default FilterPanel
