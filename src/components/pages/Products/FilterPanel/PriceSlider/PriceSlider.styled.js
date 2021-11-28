import styled from 'styled-components'
import { getTrackBackground } from 'react-range'

import theme from 'theme'

export const SliderWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
`

export const ThumbInside = styled.div`
  height: 10px;
  width: 4px;
  background-color: ${({ isDragged }) =>
		isDragged ? theme.colors.primary : '#CCC'};
`

export const SliderThumb = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
`

export const ThumbTooltip = styled.div`
  display: flex;
  position: absolute;
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  font-family: Arial, Helvetica Neue, Helvetica, sansserif;
  padding: 4px;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  white-space: nowrap;
`

export const TrackWrapper = styled.div`
  height: 36px;
  display: flex;
  width: 100%;

  div {
    div:first-child {
      div:first-child {
        left: 0;
        top: -28px;
      }
    }
  }

  div {
    div:last-child {
      div:first-child {
        right: 0;
        top: 28px;
      }
    }
  }
`

export const Track = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 4px;
  background: ${({ values, min, max }) =>
		getTrackBackground({
			values: values,
			colors: ['#ccc', theme.colors.primary, '#ccc'],
			min: min,
			max: max
		})};
  align-self: center;
`
