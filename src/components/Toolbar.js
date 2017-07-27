import React from 'react'
import { showAddDeck, filterCards } from '../actions'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck()),
  onFilter: query => dispatch(filterCards(query))
})

const Toolbar = ({ deckId, showAddDeck, onFilter }) => {
  let styleContainer = {
    backgroundColor: '#d3d3d3',
    padding: 10
  }
  return (
    <div style={styleContainer} className="toolbar">
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
            <input
              onChange={e => onFilter(e.target.value)}
              className="search"
              type="search"
              placeholder="search Deck..."
            />
          </div>
        : null}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Toolbar)
