const SET_OVERLAY = 'SET_OVERLAY'

export const setOverlay = state => ({
  type: SET_OVERLAY,
  payload: state
})

export default (state = false, { type, payload }) => {
  switch (type) {
    case SET_OVERLAY:
      return payload
    default:
      return state
  }
}
