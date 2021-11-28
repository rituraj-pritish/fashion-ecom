import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Navbar from 'components/layout/Navbar'
import TopButton from 'components/layout/TopButton'
import Loader from 'components/layout/Loader'
import ScrollToTop from 'components/ScrollToTop'
import Footer from 'components/layout/Footer'
import theme from 'theme'
import Routes from './Routes'
import useProducts from 'hooks/useProducts'
import useAuthentication from 'hooks/useAuthentication'

const App = () => {
	const { getProducts, products } = useProducts()
	const { authStateChangeHandler, isAuthenticated } = useAuthentication()

	useEffect(() => {
		getProducts()
		// getCurrencies()
	}, [])

	useEffect(() => {
		authStateChangeHandler()
	}, [isAuthenticated])

	if (!products) {
		return <Loader />
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<ScrollToTop>
					<Routes/>
				</ScrollToTop>
				<TopButton />
				<Footer />
			</ThemeProvider>
			<ReactNotification />
			<ReactTooltip />
		</>
	)
}

export default App
