import { store } from 'react-notifications-component'

const notification = {
	insert: 'top',
	container: 'bottom-center',
	dismiss: {
		duration: 2000,
	},
	animationIn: ['animated', 'fadeIn'],
	animationOut: ['animated', 'fadeOut'],
}

export default {
	success: props => {
		store.addNotification({
			title: 'Success',
			type: 'success',
			...notification,
			...props
		})
	},
	error: props => {
		store.addNotification({
			title: 'Error',
			type: 'danger',
			...notification,
			...props
		})
	},
}
