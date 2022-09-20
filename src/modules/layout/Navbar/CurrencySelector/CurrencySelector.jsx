import React, { useState, useRef } from 'react'

import currencyList from 'hooks/useCurrency/currencyList'
import { Selector, SelectorWrapper } from './CurrencySelector.styled'
import clickOutside from 'helpers/clickOutside'
import useCurrency from 'hooks/useCurrency'

const CurrencySelector = () => {
	const { changeCurrency, currency: { code }, error } = useCurrency()
	const [showSelector, setShowSelector] = useState(false)
	const node = useRef()

	const handleChange = e => {
		changeCurrency(e.target.value)
		setShowSelector(false)
	}

	clickOutside(node, () => setShowSelector(false))

	if(error) return null

	return (
		<SelectorWrapper ref={node}>
			<div onClick={() => setShowSelector(!showSelector)}>{code}</div>
			{showSelector && (
				<Selector>
					<label htmlFor='currency'>Select Currency</label>
					<select
						value={code}
						name='currency'
						id='currency'
						onChange={handleChange}
					>
						{Object.values(currencyList).map(({ code, name_plural }) => (
							<option
								key={code}
								value={code}
							>{`${code} - ${name_plural}`}</option>
						))}
					</select>
				</Selector>
			)}
		</SelectorWrapper>
	)
}

export default CurrencySelector
