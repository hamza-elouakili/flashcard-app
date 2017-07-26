(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//
//	{
// 		cards: [],
// 		decks: []
// 	}
//

var cards = function cards(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      var newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });
      return state.concat([newCard]);
    default:
      return state || [];
  }
};

var store = Redux.createStore(Redux.combineReducers({
  cards: cards // cards -> short hand notation of (es6) -> cards(property name): cards(value is reference to reducer function) or cards: cards(state.cards, action)
}));

// 	function (state, action){
// 	return {
//     cards: cards(state.cards, action),
//     decks: decks(state.decks, action)
//   }
// })

//Whenever there is change made to the state managed by the state, all the functions which subscribe to store will be executed
store.subscribe(function () {
  console.log(store.getState());
});

//We want to change the state by calling the dispatch method on the store and passing it
//an action type of what to do, and data to modify the state with how to modify the state
store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
});

//We want to change the state once more, by calling the dispatch function
//with an action type and data to modify the state with
store.dispatch({
  type: 'ADD_CARD',
  data: {}
});

},{}]},{},[1]);
