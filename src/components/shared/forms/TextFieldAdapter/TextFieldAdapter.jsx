import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/ui/Input'
import Label from 'components/ui/Label'
import { Error } from '../Form.styled'

const TextFieldAdapter = ({
  input,
  meta,
  label,
  isRequired = false,
  inputType = 'text',
  ...otherProps
}) => {
  const { touched, visited, submitError, error } = meta
  const hasError = (visited || submitError) && touched
  return (
    <>
      <Label isRequired={isRequired}>{label}</Label>
      <Input {...input} type={inputType} {...otherProps} />
      <Error>{hasError && error}</Error>
    </>
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
