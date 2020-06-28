import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'components/ui/Icon'
import Button from 'components/ui/Button'
import Modal from 'components/shared/Modal/Modal'
import Text from 'components/ui/Text'
import { ProductWrapper, ProductsList } from './RateProducts.styled'
import Rating from 'react-rating'

const RateProducts = ({ products, order_id }) => {
  const [showModal, setShowModal] = useState(true)
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
          {products.map(({ imageUrl, name, productId }) => (
            <ProductWrapper>
              <div>
                <div>
                  <img src={imageUrl} alt={name} />
                </div>
                <Text>{name}</Text>
              </div>
              <Rating
                emptySymbol={
                  <Icon mr='0.3rem'>
                    <StarOutlineIcon />
                  </Icon>
                }
                fullSymbol={
                  <Icon color='golden' mr='0.3rem'>
                    <StarIcon />
                  </Icon>
                }
              />
            </ProductWrapper>
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
