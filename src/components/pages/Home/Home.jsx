import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { PageContainer } from '../../../index.styles'
import ProductCarousel from '../../ProductCarousel'
import ShopLinks from './ShopLinks'
import CollectionContainer from './Collection'
import Brands from './Brands'

const Home = ({ products }) => {
  useEffect(() => {}, [products])

  return (
    <PageContainer>
      <ShopLinks />
      <ProductCarousel title='trending' data={products} />
      <CollectionContainer />
      <ProductCarousel title='top selling' data={products} />
      <ProductCarousel title="today's offers" data={products} />
      <Brands />
    </PageContainer>
  )
}

const mapStateToProps = ({ products }) => ({
  products: products.allProducts
})

export default connect(mapStateToProps)(Home)
