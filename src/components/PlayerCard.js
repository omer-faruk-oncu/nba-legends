import React from 'react'
import {useState} from  "react";

const PlayerCard = ({name, img, statistics}) => {

    const [showStatistics, setShowStatistics] = useState(false)

    const toggleShowStatistics = () => {
        setShowStatistics(!showStatistics);
    }


  return (
    <div className='card' onClick={toggleShowStatistics}>

        {!showStatistics
          ? (
              <div className='img-container'>
                <img src={img} alt={name} width="200px"/>
              </div>
            )
          : (
              <ul className="statisticList">
                {
                    statistics.map((statistic, index) => (
                        <li key={index}>{statistic}</li>
                    ))
                }
              </ul>
            )

        }
        <h3 className='card-info'>{name}</h3>
    </div>
  )
}

export default PlayerCard
