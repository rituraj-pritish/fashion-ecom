import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'
import { Form, Field } from 'react-final-form'
import Input from 'components/ui/Input'
import Label from 'components/ui/Label'

const Account = props => {
  return (
    <PageContainer>
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit, values }) => {
          console.log('val', values)
          return (
            <form onSubmit={handleSubmit}>
              <Field
                name='name'
                render={({ input }) => {
                  return (
                    <>
                      <Label>Name</Label>
                      <Input  type='text' onChange={input.onChange} />
                    </>
                  )
                }}
              />
            </form>
          )
        }}
      />
    </PageContainer>
  )
}

Account.propTypes = {}

export default Account
