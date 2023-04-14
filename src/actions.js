import * as action from './actionTypes'

export const bugAdded = (description) => ({
  type: action.BUG_ADDED,
  payload: {
    description,
  },
})

export const bugResolved = (id) => ({
  type: action.BUG_RESOLVED,
  payload: {
    id,
  },
})
