import store from './store'
import * as actions from './actions'

store.subscribe(() => {
  console.log('Store Changed')
})

store.dispatch(actions.bugAdded('Bug1'))
