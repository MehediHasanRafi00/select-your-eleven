import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayer.filter(
      (ply) => ply.player_name !== p.player_name
    );
    console.log(filteredData);
    setPurchasedPlayer(filteredData);
    setAvailableBalance(
      availableBalance + parseInt(p.price.split(",").join(""))
    );
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl ">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayer.length}/6)`}
        </h1>

        <div className="font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`px-6 py-3  border-1 border-[#13131310]  rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-3  border-1 border-[#13131310] rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          setToggle={setToggle}
          removePlayer={removePlayer}
          purchasedPlayer={purchasedPlayer}
        ></SelectedPlayers>
      )}

      <Subscribe></Subscribe>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
