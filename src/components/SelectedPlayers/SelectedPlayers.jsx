import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayer,removePlayer,setToggle }) => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      {
        purchasedPlayer.map(Player=> <SelectedCard removePlayer={removePlayer}  Player={Player}></SelectedCard>)
      }

      <button onClick={()=>setToggle(true)} className="btn hover:bg-[#e7fe29] mt-9">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;
