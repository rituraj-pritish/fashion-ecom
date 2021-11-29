import React from 'react'

import { PageContainer } from 'index.styles'
import ProductsContainer from 'components/pages/Products/ProductsContainer'
import FilterPanel from 'components/pages/Products/FilterPanel'
import { Container } from './SearchResults.styled'
import searchProducts from 'helpers/searchProducts'
import filter from 'helpers/filter'
import { useParams } from 'react-router'
import useProducts from 'hooks/useProducts'
import useFilter from 'hooks/useFilter'

const SearchResults = () => {
	const { searchQuery } = useParams()
	const { products: allProducts } = useProducts() 
	const { criteria } = useFilter()
	const products = filter(
		searchProducts(allProducts, searchQuery),
		criteria
	)
  
	return (
		<PageContainer>
			<Container>
				<FilterPanel />
				<ProductsContainer products={products} />
			</Container>
		</PageContainer>
	)
}

export default SearchResults
