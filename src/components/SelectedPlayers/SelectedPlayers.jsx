import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayer,removePlayer }) => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      {
        purchasedPlayer.map(Player=> <SelectedCard removePlayer={removePlayer}  Player={Player}></SelectedCard>)
      }
    </div>
  );
};

export default SelectedPlayers;
