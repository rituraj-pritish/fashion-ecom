import React from 'react'
import PropTypes from 'prop-types'
import { PageContainer } from 'index.styles'
import { Form, Field } from 'react-final-form'
import RatingAdapter from 'components/shared/forms/RatingAdapter'
import { FormContainer } from './Review.styled'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import Button from 'components/ui/Button'

const Review = ({ review }) => {
  return (
    <PageContainer>
      <Form
        onSubmit={() => {}}
        initialValues={review}
        render={({ handleSubmit, values, valid, ...props }) => {
          console.log('pro', props)
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
                <Button disabled={!valid} width='10rem' marginLeft='auto' >Submit</Button>
              </form>
            </FormContainer>
          )
        }}
      />
    </PageContainer>
  )
}

Review.propTypes = {
  review: PropTypes.object
}

export default Review
