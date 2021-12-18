import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const TeamList = ( teamPlayers ) => (
  <div>
    {
      teamPlayers.players.map(player =>
        <Player
          key={player.id}
          {...player}
          onClick={() => teamPlayers.togglePlayer(player.id)}
        />
      )
    }
  </div>
)

TeamList.propTypes = {
  teamPlayers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      playerId: PropTypes.string.isRequired,
      playerName: PropTypes.string.isRequired,
      playerNationality: PropTypes.string.isRequired,
      playerPost: PropTypes.string.isRequired
    }))
}


export default TeamList
