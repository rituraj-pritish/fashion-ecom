import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/ui/Button'
import Modal from 'components/shared/Modal'
import Text from 'components/ui/Text'
import { ProductWrapper } from './ReviewProductList.styled'
import { Link } from 'react-router-dom'

const ReviewProductList = ({ products, order_id }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button variant='secondary' onClick={() => setShowModal(true)}>
        Write a Review
      </Button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        hasFixedHeader
        header={<Text>Select a product to review</Text>}
        modalStyles={{
          height: '48rem',
          width: '60rem'
        }}
      >
        {products.map(({ imageUrl, name, productId, variantId }) => (
          <Link
            key={variantId}
            to={`/user/review/${order_id}/p/${productId}/v/${variantId}`}
          >
            <ProductWrapper>
              <div>
                <img src={imageUrl} alt={name} />
              </div>
              <Text>{name}</Text>
            </ProductWrapper>
          </Link>
        ))}
      </Modal>
    </>
  )
}

ReviewProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ReviewProductList
