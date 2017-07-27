import React from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router'

class CardModal extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.front).focus()
  }

  onSave(e) {
    let front = ReactDOM.findDOMNode(this.refs.front)
    let back = ReactDOM.findDOMNode(this.refs.back)

    this.props.onSave(
      Object.assign({}, this.props.card, {
        front: front.value,
        back: back.value
      })
    )
    browserHistory.push(`/deck/${this.props.deckId}`)
  }

  onDelete(e) {
    this.props.onDelete(this.props.card.id)
    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }

  render() {
    let { card, onDelete } = this.props
    let style = {
      backgroundColor: '#d3d3d3',
      width: '50%',
      height: '50%',
      position: 'fixed',
      zIndex: 1,
      margin: '5% auto',
      left: 0,
      right: 0
    }

    return (
      <div style={style} className="modal">
        <h1>
          {onDelete ? 'Edit' : 'New'} Card
        </h1>
        <label>Card Front: </label>
        <textarea ref="front" defaultValue={card.front} />
        <label>Card Back: </label>
        <textarea ref="back" defaultValue={card.back} />

        <p>
          <button onClick={this.onSave}>Save Card</button>
          <Link className="btn" to={`/deck/${card.deckId}`}>
            Cancel
          </Link>
          {onDelete
            ? <button onClick={this.onDelete} className="delete">
                Delete Card
              </button>
            : null}
        </p>
      </div>
    )
  }
}

export default CardModal
