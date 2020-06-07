import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Range } from 'react-range'
import {
  SliderThumb,
  ThumbTooltip,
  ThumbInside,
  Track,
  TrackWrapper,
  SliderWrapper
} from './PriceSlider.styled'

const PriceSlider = ({ setFilterCriteria, currency }) => {
  const MIN = 1
  const MAX = (250 * currency.rate).toFixed(2)
  const [values, setValues] = useState([MIN, MAX])

  useEffect(() => {
    setValues([MIN, MAX])
  }, [MAX, currency.rate])

  const handleChange = newValues => {
    setValues(newValues)
    setFilterCriteria({
      price: {
        min: newValues[0] / currency.rate,
        max: newValues[1] / currency.rate
      }
    })
  }

  return (
    <SliderWrapper>
      <Range
        values={values}
        onChange={handleChange}
        min={MIN}
        max={MAX}
        renderTrack={({ props, children }) => (
          <TrackWrapper
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style
            }}
          >
            <Track ref={props.ref} values={values} min={MIN} max={MAX}>
              {children}
            </Track>
          </TrackWrapper>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <SliderThumb {...props} style={{ ...props.style }}>
            <ThumbTooltip>{`${currency.symbol} ${values[index]}`}</ThumbTooltip>
            <ThumbInside isDragged={isDragged} />
          </SliderThumb>
        )}
      />
    </SliderWrapper>
  )
}

PriceSlider.propTypes = {
  setFilterCriteria: PropTypes.func.isRequired,
  currency: PropTypes.shape({
    code: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired
  }).isRequired
}

export default PriceSlider
