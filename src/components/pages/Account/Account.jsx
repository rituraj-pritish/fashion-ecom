import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'
import { Form, Field } from 'react-final-form'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import { StyledForm, AddressBlock } from './Account.styled'
import { emailValidator } from 'helpers/validations'
import Button from 'components/ui/Button'

const Account = ({ user, updateUserDetails }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = values => {
    setIsEditing(false)
    console.log('cal')
    const { address_line_1, address_line_2, zip_code, ...otherDetails } = values

    updateUserDetails({
      address: {
        address_line_1,
        address_line_2,
        zip_code
      },
      ...otherDetails
    })
  }

  return (
    <PageContainer>
      <Form
        initialValues={{
          ...user.address,
          ...user
        }}
        onSubmit={handleUpdate}
        render={({ handleSubmit, values }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <Field
                name='name'
                label='Name'
                isRequired
                validate={val => !val && 'Required'}
                component={TextFieldAdapter}
              />
              <Field
                name='email'
                label='Email'
                isRequired
                validate={emailValidator}
                component={TextFieldAdapter}
              />
              <Field name='phone' label='Phone' component={TextFieldAdapter} />
              <AddressBlock>
                Address
                <Field
                  name='address_line_1'
                  label='Line 1'
                  isRequired
                  validate={val => !val && 'Required'}
                  component={TextFieldAdapter}
                />
                <Field
                  name='address_line_2'
                  label='Line 2'
                  isRequired
                  validate={val => !val && 'Required'}
                  component={TextFieldAdapter}
                />
                <Field
                  name='zip_code'
                  label='Zip Code'
                  isRequired
                  validate={val => !val && 'Required'}
                  component={TextFieldAdapter}
                />
              </AddressBlock>
              {isEditing ? (
                <>
                  <Button variant='cancel' onClick={() => setIsEditing(false)} >Cancel</Button>
                  <Button type='submit'>Save Changes</Button>
                </>
              ) : (
                <Button
                  type='button'
                  variant='secondary'
                  onClick={e => {
                    e.preventDefault()
                    setIsEditing(true)
                  }}
                >
                  Edit
                </Button>
              )}
            </StyledForm>
          )
        }}
      />
    </PageContainer>
  )
}

Account.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.object,
    email: PropTypes.string.isRequired,
    updateUserDetails: PropTypes.func.isRequired
  })
}

export default Account
