import React from 'react'
import { Link } from 'react-router'

const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <p>
          {card.front}
        </p>
        <Link className="btn" to={`/deck/${card.deckid}/edit/${card.id}`}>
          Edit
        </Link>
      </div>
    </div>
  )
}

export default Card
