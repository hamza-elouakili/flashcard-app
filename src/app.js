//1_You create a store by calling the Redux.createStore
//2_You pass in a callback function which contains reducers which will modify the state according to a given action
//3_You create a switch statement which will determine based on which action type it receives which reducer to execute on the state
//4_All changes to the state happens through the store
//5_The return value is always a new state, which is then managed by the state and whenever you call dispatch the previous state is then consulted
const store = Redux.createStore((state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      })
      return Object.assign({}, state, {
        cards: state.cards ? state.cards.concat([newCard]) : [newCard]
      })
    default:
      return state || {}
  }
})

//Whenever there is change made to the state managed by the state, all the functions which subscribe to store will be executed
store.subscribe(() => {
  console.log(store.getState())
})

//We want to change the state by calling the dispatch method on the store and passing it
//an action type of what to do, and data to modify the state with how to modify the state
store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
})

//We want to change the state once more, by calling the dispatch function
//with an action type and data to modify the state with
store.dispatch({
  type: 'ADD_CARD',
  data: {}
})
