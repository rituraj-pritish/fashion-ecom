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
	success: message => {
		store.addNotification({
			title: 'Success',
			...notification,
			message: message,
			type: 'success',
		})
	},
	error: message => {
		store.addNotification({
			title: 'Error',
			...notification,
			message: message,
			type: 'danger',
		})
	},
}
