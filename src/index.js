import { bugAdded } from './actions'
import store from './store'

const unsubscribe = store.subscribe(() => {
  console.log('Store Changed!', store.getState())
})

store.dispatch(bugAdded('Bug 1'))

unsubscribe()

store.dispatch({
  type: action.BUG_REMOVED,
  payload: {
    id: 1,
  },
})
console.log(store.getState())
