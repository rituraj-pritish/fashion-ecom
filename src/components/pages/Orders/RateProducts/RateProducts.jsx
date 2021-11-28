import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'components/ui/Icon'
import Button from 'components/ui/Button'
import Modal from 'components/shared/Modal/Modal'
import Text from 'components/ui/Text'
import {
	ProductWrapper,
	ProductsList,
	RatingContainer
} from './RateProducts.styled'
import Rating from 'react-rating'
import LoadingWrap from 'components/shared/LoadingWrap'
import theme from 'theme'
import useUserActions from 'hooks/useUserActions'

const RateProducts = ({
	products,
	order_id,
	isRating,
}) => {
	const { rateProduct, removeRating } = useUserActions()
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<Button variant='secondary' onClick={() => setShowModal(true)}>
        Rate Products
			</Button>
			<Modal
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				modalStyles={{
					width: '60rem',
					height: '48rem'
				}}
				header={<Text>Rate Products</Text>}
				hasFixedHeader
			>
				<ProductsList>
					{products.map(({ imageUrl, name, productId, rating }) => (
						<LoadingWrap isLoading={isRating.includes(productId)} key={productId}>
							<ProductWrapper>
								<div>
									<div>
										<img src={imageUrl} alt={name} />
									</div>
									<Text>{name}</Text>
								</div>

								<RatingContainer>
									<Rating
										initialRating={rating}
										emptySymbol={
											<Icon mr='0.3rem' color={theme.colors.golden}>
												<StarOutlineIcon />
											</Icon>
										}
										fullSymbol={
											<Icon color={theme.colors.golden} mr='0.3rem'>
												<StarIcon />
											</Icon>
										}
										onChange={rating =>
											rateProduct(rating, order_id, productId, products)
										}
										readonly={!!rating}
									/>
									{rating && (
										<div
											onClick={() =>
												removeRating(rating, order_id, productId, products)
											}
										>
                      Remove
										</div>
									)}
								</RatingContainer>
							</ProductWrapper>
						</LoadingWrap>
					))}
				</ProductsList>
			</Modal>
		</>
	)
}

RateProducts.propTypes = {
	products: PropTypes.array.isRequired,
	order_id: PropTypes.string.isRequired
}

export default RateProducts
