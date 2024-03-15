import React from 'react';
import indianCricketPlayers from './playersData.json';
import "./PlayerCard.css"

function App2() {
    return (
     
        <div className="parent">
            
         
         <div className="app">
     <marquee behavior="" direction="" > <h1 >Indian Cricket Players</h1></marquee>
      <div className="card-container">
                    {indianCricketPlayers.map((player, index) => (
   
                        <div key={index} className="card">
                            
                           
                <img src={player.photo}></img>
                            <div className="data">
                                <h2> {player.name}</h2>
            <p><strong>Role:</strong> {player.role}</p>
            <p><strong>Age:</strong> {player.age}</p>
                <p><strong>Team:</strong> {player.team}</p>
                            <p><strong>ODI_Career:</strong> {player.odi_career}</p>
                            <p ><strong>One_Day_Carrier:</strong> { player.one_day_carrier}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App2;