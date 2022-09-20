import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'

import { PageContainer } from 'index.styles'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import { StyledForm, AddressBlock, ActionButtons } from './Account.styled'
import { emailValidator } from 'helpers/validations'
import Button from 'atoms/Button'
import useAuthentication from 'hooks/useAuthentication'

const Account = () => {
	const { user, updateUserDetails } = useAuthentication()
	const [isEditing, setIsEditing] = useState(false)

	const handleUpdate = values => {
		setIsEditing(false)
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
				render={({ handleSubmit, pristine }) => {
					return (
						<StyledForm onSubmit={handleSubmit}>
							<Field
								name='name'
								label='Name'
								isRequired
								readOnly={!isEditing}
								validate={val => !val && 'Required'}
								component={TextFieldAdapter}
							/>
							<Field
								name='email'
								label='Email'
								readOnly={!isEditing}
								isRequired
								validate={emailValidator}
								component={TextFieldAdapter}
							/>
							<Field
								name='phone'
								readOnly={!isEditing}
								label='Phone'
								component={TextFieldAdapter}
							/>
							<AddressBlock>
                Address
								<Field
									name='address_line_1'
									label='Line 1'
									readOnly={!isEditing}
									isRequired
									validate={val => !val && 'Required'}
									component={TextFieldAdapter}
								/>
								<Field
									name='address_line_2'
									label='Line 2'
									readOnly={!isEditing}
									isRequired
									validate={val => !val && 'Required'}
									component={TextFieldAdapter}
								/>
								<Field
									name='zip_code'
									label='Zip Code'
									readOnly={!isEditing}
									isRequired
									validate={val => !val && 'Required'}
									component={TextFieldAdapter}
								/>
							</AddressBlock>
							<ActionButtons>
								{isEditing ? (
									<>
										<Button
											variant='cancel'
											onClick={() => setIsEditing(false)}
										>
                      Cancel
										</Button>
										<Button type='submit' disabled={pristine} >Save Changes</Button>
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
							</ActionButtons>
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
