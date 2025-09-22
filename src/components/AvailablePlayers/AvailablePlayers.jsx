import React, { use } from "react";


import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,setPurchasedPlayer,purchasedPlayer }) => {
  const plyerData = use(playersPromise);
  
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {
            plyerData.map(player=> <PlayerCard setAvailableBalance={setAvailableBalance} 
              availableBalance={availableBalance}
              setPurchasedPlayer={setPurchasedPlayer}
              purchasedPlayer={purchasedPlayer}
              player={player}></PlayerCard>)
        }
      
    </div>
  );
};

export default AvailablePlayers;
