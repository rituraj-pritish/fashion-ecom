import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { PageContainer } from '../../../../index.styles'
import ProductCarousel from '../../../product-carousel/ProductCarousel'
import ShopLinks from '../shop-links/ShopLinks'
import CollectionContainer from '../collection/CollectionContainer'
import Brands from '../brands/Brands'

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
