import produce from "immer"
import { db } from "services/firebase"

const initialState = {
  orders: []
}

export const fetchUserDetails = () => async (dispatch, getState) {
  const {auth} = getState()
  const userId = auth.user?.id

  db.collection('users').doc(userId)

}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {

      default:
        break
    } 
  })
