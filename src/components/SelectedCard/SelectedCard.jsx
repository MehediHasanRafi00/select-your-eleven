import React from 'react';

const SelectedCard = ({Player,removePlayer}) => {
    const handleRemove = ()=>{
        removePlayer(Player)
    }
    return (
        <div className=" mt-5 flex justify-between items-center p-4 rounded-2xl shadow-sm ">
        <div className="flex gap-6 items-center">
          <img
            className="h-15 w-15 rounded-2xl object-cover"
            src={Player.player_image}
            alt=""
          />
          <div>
            <h1 className="font-semibold">{Player.player_name}</h1>
            <p className="text-xs">{Player.playing_role}</p>
          </div>
        </div>
        <div className='btn btn-ghost' onClick={handleRemove}>
          <img src="https://i.ibb.co.com/mFNd8SDq/Frame.png" alt="" />
        </div>
      </div>
    );
};

export default SelectedCard;