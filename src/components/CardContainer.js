import React from 'react'
import PlayerCard from './PlayerCard'

const CardContainer = ({data, searchPlayer}) => {

    const filteredPlayers = data.filter(player =>player.name.toLowerCase().includes(searchPlayer.toLowerCase()))
    
    
  return (
    <div className='card-container'>
        {
            filteredPlayers.map(player =>
                <PlayerCard key={player.name} name={player.name} img={player.img} statistics={player.statistics} />
                ) 
        }
      
    </div>
  )
}

export default CardContainer
