import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { resetFilter, setOverlay } from 'redux/actions/userActions'
import Icon from 'components/common/Icon'
import Text from 'components/common/Text'
import BarsIcon from 'assets/icons/BarsIcon'
import FilterPanel from '../filter-panel/FilterPanel'
import ProductsContainer from '../products-container/ProductsContainer'
import { Container, FilterBtn } from './Products.styles'
import { PageContainer } from 'index.styles'
import filter from 'helpers/filter'

const Products = ({ products, searching, filtered, setOverlay }) => {
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
        <ProductsContainer products={products} />
      </Container>
    </PageContainer>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = ({ products: prod, user }, { match }) => {
  const { productsCategory: category } = match.params
  const { allProducts, filter: filterCri } = prod

  let products = []
  products = allProducts.filter(product => product.category === category)
  if (!products.length) products = allProducts

  products = filter(products, filterCri)

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
