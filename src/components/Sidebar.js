import React from 'react'
import ReactDOM from 'react-dom'

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
        <button onClick={e => this.props.showAddDeck()}>New Deck</button>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>
              {deck.name}
            </li>
          )}
        </ul>
        {props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
      </div>
    )
  }
}

export default Sidebar
