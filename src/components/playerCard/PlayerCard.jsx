import React, { useState } from "react";

import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Group-1.png";
import { toast } from "react-toastify";

const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchasedPlayer,purchasedPlayer }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split(",").join(""))
    if(availableBalance<playerPrice){
        toast("Not enough Coins!!")
        return
    }
    if(purchasedPlayer.length ===6){
      toast(' 6 player already selected')
      return
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    );
    setPurchasedPlayer([...purchasedPlayer,playerData])
  };
  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt="Shoes"
          className="w-full h-[300px] object-cover rounded-2xl"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-3">
          <img src={userImg} alt="" />
          <h2 className="card-title ">{player.player_name}</h2>
        </div>
        <div className="flex justify-between items-center border-b-1 pb-2 border-[#13131310]">
          <div className="flex gap-2 my-4">
            <img className="w-5" src={flagImg} alt="" />
            <span>{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between font-bold my-4">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between ">
          <span className="font-bold"> {player.batting_style} </span>
          <span> {player.bowling_style} </span>
        </div>
        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
