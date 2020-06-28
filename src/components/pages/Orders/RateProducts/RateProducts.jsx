import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/ui/Button'
import Modal from 'components/shared/Modal/Modal'

const RateProducts = props => {
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
          width: '40rem',
          height: '40rem'
        }}
      >
        something
      </Modal>
    </>
  )
}

RateProducts.propTypes = {}

export default RateProducts

{
  /* <Rating
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
/> */
}
