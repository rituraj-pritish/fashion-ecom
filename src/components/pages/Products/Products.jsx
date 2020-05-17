import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FilterPanel from './FilterPanel'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import { Container } from './Products.styles'
import { PageContainer } from 'index.styles'
import filter from 'helpers/filter'

const Products = ({ products }) => {
  return (
    <PageContainer>
      <Container>
        <FilterPanel />
        <ProductsContainer products={products} />
      </Container>
    </PageContainer>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = ({ products: prod }, { match }) => {
  const { productsCategory: category } = match.params
  const { allProducts, filterCriteria } = prod

  let products = []
  products = allProducts.filter(product => product.category === category)
  if (!products.length) products = allProducts

  products = filter(products, filterCriteria)

  return {
    products
  }
}

export default connect(mapStateToProps)(Products)
