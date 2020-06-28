import produce from 'immer'
import { db } from 'services/firebase'

// types

// action creators

// reducer

const initialState = {
  
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {


      default:
        break
    }
  })
