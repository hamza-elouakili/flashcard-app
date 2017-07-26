//
//	{
// 		cards: [],
// 		decks: []
// 	}
//

const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      })
      return state.concat([newCard])
    default:
      return state || []
  }
}

const store = Redux.createStore(
  Redux.combineReducers({
    cards // cards -> short hand notation of (es6) -> cards(property name): cards(value is reference to reducer function) or cards: cards(state.cards, action)
  })
)

// 	function (state, action){
// 	return {
//     cards: cards(state.cards, action),
//     decks: decks(state.decks, action)
//   }
// })

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
