import produce from 'immer'

const SET_APP_LOADING = 'SET_APP_LOADING'

export const setAppLoading = state => ({
  type: SET_APP_LOADING,
  payload: state
})

const initialState = {
  isLoading: true
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case SET_APP_LOADING:
        draft.isLoading = payload
        break

      default:
        break
    }
  })
