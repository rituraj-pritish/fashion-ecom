import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'

import { PageContainer } from 'index.styles'
import RatingAdapter from 'components/shared/forms/RatingAdapter'
import { FormContainer, SpinnerWrapper } from './Review.styled'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import Button from 'components/ui/Button'
import ProductCarousel from 'components/shared/ProductCarousel'
import ShuffleArray from 'helpers/ shuffleArray'
import Spinner from 'components/shared/Spinner'

const Review = ({
  addReview,
  orderId,
  productId,
  isAddingReview,
  products,
  getReview
}) => {
  const [review, setReview] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    getReview(productId, orderId).then(res => {
      setReview(res)
      setIsFetching(false)
    })
  }, [productId, orderId, getReview])

  if (isFetching) {
    return (
      <SpinnerWrapper>
        <Spinner size={35} />
      </SpinnerWrapper>
    )
  }

  return (
    <PageContainer>
      <Form
        onSubmit={values => addReview(values, productId, orderId, review.id)}
        initialValues={{
          anonymous: false,
          ...review
        }}
        render={({ handleSubmit, values, valid }) => {
          return (
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <Field
                  label='Overall Rating'
                  name='overall_rating'
                  initialRating={values.overall_rating}
                  component={RatingAdapter}
                />
                <Field
                  label='Heading'
                  name='heading'
                  isRequired
                  validate={val => {
                    if (!val) return 'This field is required'
                  }}
                  component={TextFieldAdapter}
                />
                <Field
                  label='Review'
                  name='review'
                  isRequired
                  validate={val => {
                    if (!val) return 'This field is required'
                  }}
                  inputType='textarea'
                  height='22rem'
                  component={TextFieldAdapter}
                />
                <Field
                  name='anonymous'
                  type='checkbox'
                  render={({ input }) => {
                    return (
                      <>
                        <input id='anonymous' type='checkbox' {...input} />
                        <label htmlFor='anonymous'>Post as anonymous</label>
                      </>
                    )
                  }}
                />
                <Button
                  isLoading={isAddingReview}
                  disabled={!valid}
                  width='10rem'
                  marginLeft='auto'
                >
                  Submit
                </Button>
              </form>
            </FormContainer>
          )
        }}
      />
      <ProductCarousel title='Trending' data={ShuffleArray(products)} />
    </PageContainer>
  )
}

Review.propTypes = {
  orderId: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  getReview: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired
}

export default Review
