import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ id, playerName, playerId, playerNationality, playerPost, onClick}) => (
  <div className='row' key={id}>
    <div className='col-12'>
      <div className={
        playerPost === 'attack' ? "card text-white bg-success mb-3" :
        (playerPost === 'defense' ? "card text-white bg-warning mb-3" : 
        (playerPost === 'halfback' ? "card text-white bg-secondary mb-3" : 
        (playerPost === 'goaler' ? "card text-white bg-info mb-3" : ""
        )))
      }>
        <div className="card-header">{playerName}
          <span><button type="button" class="btn btn-outline-danger" onClick={onClick}>Remove</button></span>
        </div>
        <div className="card-body">
          <h4 className="card-title">Post: {playerPost}</h4>
          <p className="card-text">{playerName} is {playerNationality}, wearing {playerId} shirt and playing in "{playerPost}" post</p>
        </div>
      </div>
    </div>
  </div>
)

Player.propTypes = {
  id: PropTypes.number.isRequired,
  playerId: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerNationality: PropTypes.string.isRequired,
  playerPost: PropTypes.string.isRequired
}

export default Player
