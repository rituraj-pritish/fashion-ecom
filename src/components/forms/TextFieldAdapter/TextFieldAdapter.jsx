import React from 'react'
import PropTypes from 'prop-types'
import Input from 'atoms/Input'
import Label from 'atoms/Label'
import { Error } from '../Form.styled'
import { AdapterWrapper, TextArea } from './TextFeildAdapter.styled'

const TextFieldAdapter = ({
  input,
  meta,
  label,
  isRequired = false,
  inputType = 'text',
  ...otherProps
}) => {
  const { touched, visited, error, submitFailed } = meta
  const showError = (visited || submitFailed) && touched

  return (
    <AdapterWrapper>
      <Label isRequired={isRequired}>{label}</Label>
      {
        inputType === 'textarea' 
        ? <TextArea {...input} {...otherProps} /> 
        :<Input {...input} type={inputType} {...otherProps} mb={0} mt='0.5rem' />
      }
      <Error>{showError && error}</Error>
    </AdapterWrapper>
  )
}

TextFieldAdapter.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    submitError: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  inputType: PropTypes.string
}

export default TextFieldAdapter
