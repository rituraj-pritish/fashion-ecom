import { createState, useState } from '@hookstate/core'
import React from 'react'

const INITIAL_STATE = {
	price: 'all',
	brand: 'brand-all',
	sort: 'rating'
}

const FILTER_STATE = createState(INITIAL_STATE)

export default () => {
	const filterState = useState(FILTER_STATE)

	const setFilterCriteria = criteria => {
		filterState.set(criteria)
	}

	return React.useMemo(() => ({
		filterCriteria: filterState.get(),
		setFilterCriteria
	}))
}