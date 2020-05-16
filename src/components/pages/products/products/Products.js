import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  removeSearch,
  resetFilter,
  setOverlay
} from 'redux/actions/userActions'
import searchProducts from 'helpers/searchProducts'
import Icon from 'components/common/Icon'
import Text from 'components/common/Text'
import BarsIcon from 'assets/icons/BarsIcon'
import FilterPanel from '../filter-panel/FilterPanel'
import ProductsContainer from '../products-container/ProductsContainer'
import { Container, FilterBtn } from './Products.styles'
import { PageContainer } from 'index.styles'

const Products = ({
  products,
  searching,
  filtered,
  setOverlay
}) => {
  const [showFilter, setShowFilter] = useState(false)

  const handleClick = () => {
    setShowFilter(!showFilter)
    setOverlay(true)
  }
  return (
    <PageContainer>
      <FilterBtn onClick={handleClick}>
        <Icon display='inline-block' width='15px'>
          <BarsIcon />
        </Icon>{' '}
        Filter
      </FilterBtn>

      <Container>
        <FilterPanel
          show={showFilter}
          setShow={setShowFilter}
          items={products}
        />
        {((searching && filtered.length === 0) || products.length === 0) && (
          <Text mt='2rem'>No products found.</Text>
        )}
        <ProductsContainer items={products} />
      </Container>
    </PageContainer>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = ({ products: prod, user }, { match }) => {
  const { productsCategory: category } = match.params
  const { allProducts } = prod

  let products = []
  products = allProducts.filter(product => product.category === category)
  if (!products.length) products = allProducts

  return {
    products,
    filtered: user.filtered,
    filtering: user.filtering,
    loading: user.loading
  }
}

export default connect(mapStateToProps, {
  resetFilter,
  setOverlay
})(Products)
