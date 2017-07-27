import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addDeck, showAddDeck, hideAddDeck } from '../actions'
import { Link } from 'react-router'

// 					 decks={state.decks}
//           addingDeck={state.addingDeck}

//           addDeck={name => store.dispatch(addDeck(name))}
//           showAddDeck={() => store.dispatch(showAddDeck())}
//           hideAddDeck={() => store.dispatch(hideAddDeck())}

const mapStateToProps = ({ decks, addingDeck }) => ({
  decks,
  addingDeck
})

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
})

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.createDeck = this.createDeck.bind(this)
  }

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this.refs.add)
    if (el) el.focus()
  }

  createDeck(e) {
    if (e.which !== 13) return

    let name = ReactDOM.findDOMNode(this.refs.add).value
    this.props.addDeck(name)
    this.props.hideAddDeck()
  }

  render() {
    let props = this.props
    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={`/deck/${deck.id}`}>
                {deck.name}
              </Link>
            </li>
          )}
        </ul>
        {props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
      </div>
    )
  }
}

//You pass two argumemts to the connect function, you get a function back and pass in the presentational compoent Sidebar in
//and you get back a container component which you then export
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
