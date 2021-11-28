import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Navbar from 'components/layout/Navbar'
import TopButton from 'components/layout/TopButton'
import Loader from 'components/layout/Loader'
import ScrollToTop from 'components/ScrollToTop'
import Overlay from 'components/layout/Overlay'
import Footer from 'components/layout/Footer'
import theme from 'theme'
import Routes from './Routes'
import useProducts from 'hooks/useProducts'

const App = () => {
	const { getProducts, products } = useProducts()

	useEffect(() => {
		getProducts()
		// getCurrencies()
	}, [])

	// useEffect(() => {
	// 	authStateChangeHandler()
	// }, [isAuthenticated])

	if (!products) {
		return <Loader />
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar />
					<ScrollToTop>
						<Routes/>
					</ScrollToTop>
					<TopButton />
					<Footer />
				</Router>
			</ThemeProvider>
			<ReactNotification />
			<ReactTooltip />
			<Overlay />
		</>
	)
}

export default App
