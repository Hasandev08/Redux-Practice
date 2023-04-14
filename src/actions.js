import * as action from './actionTypes'

export const bugAdded = (desc) => ({
  type: action.BUG_ADDED,
  payload: {
    description: desc,
  },
})
