import React from 'react'
import { showAddDeck } from '../actions'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck())
})

const Toolbar = ({ deckId, showAddDeck }) => {
  return (
    <div className="toolbar">
      <div>
        <button onClick={showAddDeck}>+ New Deck</button>
      </div>
      {deckId
        ? <div>
            <Link className="btn" to={`/deck/${deckId}/new`}>
              + New Card
            </Link>
            <Link className="btn" to={`/deck/${deckId}/study`}>
              Study Deck
            </Link>
          </div>
        : null}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Toolbar)
