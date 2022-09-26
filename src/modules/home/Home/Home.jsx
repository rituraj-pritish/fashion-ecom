import React from 'react'

import shuffleArray from 'helpers/ shuffleArray'
import { PageContainer } from '../../../index.styles'
import ProductCarousel from 'components/ProductCarousel'
import ShopLinks from './ShopLinks'
import CollectionContainer from './Collection'
import Brands from './Brands'
import useProducts from 'hooks/useProducts'

const Home = () => {
	const { products } = useProducts()

	const trendingProducts = React.useMemo(() => shuffleArray(products), [])
	const topSellingProducts = React.useMemo(() => shuffleArray(products), [])
  
	return (
		<PageContainer>
			<ShopLinks />
			<ProductCarousel title='trending' data={trendingProducts} />
			<CollectionContainer />
			<ProductCarousel title='top selling' data={topSellingProducts} />
			<ProductCarousel title="today's offers" data={products} />
			<Brands />
		</PageContainer>
	)
}

export default Home
