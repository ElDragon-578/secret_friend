import { useEffect, useState } from "react";
import secretFriendImage from "/secret_friend2.png";

export function WelcomePage() {
  const [arrayFriends, setArrysFriends] = useState([]);

  const [inputFriend, setInputFriend] = useState("");

  const [winner, setWinner] = useState("");

  const radius = 250; //circle radius

  const handleChange = (e) => {
    setInputFriend(e.target.value);
  };

  // useEffect(()=>{
  //   console.log(inputFriend)
  // },[inputFriend])

  const handlePush = (e) => {
    if (inputFriend.trim() !== "") {
      if (!arrayFriends.includes(inputFriend.trim())) {
        setArrysFriends((prev) => [...prev, inputFriend.trim()]);
      } else {
        return alert("Este amigo ya existe porfavor inserte uno nuevo");
      }
      setInputFriend("");
    } else {
      return alert("Porfavor inserte un nombre antes de continuar");
    }
  };

  const handleEmpty = (e) => {
    setInputFriend("");
    setArrysFriends([]);
  };

  const handleSort = (e) => {
    const numFriendsWinner = Math.floor(Math.random() * arrayFriends.length);

    setWinner(arrayFriends[numFriendsWinner]);
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="relative w-[300px] h-screen rounded-full flex items-center justify-center">
        <div className="w-auto absolute flex flex-col items-center gap-2">
          <img className="w-40 h-40" src={secretFriendImage} alt="" />
          <h1 className="text-3xl font-semibold text-yellow-500 drop-shadow-lg tracking-wide text-center">
            Escribe el nombre de un amigo
          </h1>
          <input
            type="text"
            className="w-60 px-2 py-1 rounded-md border border-gray-400"
            placeholder="Escribe un nombre"
            onChange={handleChange}
            value={inputFriend}
          />
          <div className="w-60 flex flex-row place-content-between">
            <button
              className="bg-[#33312B] text-white px-4 py-1 rounded-md transition-transform duration-300 ease-in-out  hover:bg-[#756A3B] hover:scale-125"
              onClick={handlePush}
            >
              Agregar
            </button>
            <button
              className="bg-[#33312B] text-white px-4 py-1 rounded-md transition-transform duration-300 ease-in-out  hover:bg-[#756A3B] hover:scale-125"
              onClick={handleEmpty}
            >
              Vaciar
            </button>
          </div>
          {arrayFriends.length > 0 && (
            <button
              className="bg-[#33312B] text-white px-4 py-1 rounded-md transition-transform duration-300 ease-in-out  hover:bg-[#756A3B] hover:scale-125 z-40"
              onClick={handleSort}
            >
              Sortear
            </button>
          )}
        </div>

        {arrayFriends?.map((friend, index) => {
          const angle = (index / arrayFriends.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={index}
              className="w-20 h-20 rounded-full bg-[#F4C200] text-white flex items-center justify-center absolute transition-transform duration-700 ease-out hover:scale-105"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <h1 className="text-sm text-center leading-none">{friend}</h1>
            </div>
          );
        })}

        {winner && (
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
            onClick={()=>setWinner("")}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h1 className="text-4xl font-semibold text-[#33312B] drop-shadow-lg tracking-wide text-center">
                El ganador es
                <p className="text-4xl font-semibold text-yellow-500 drop-shadow-lg tracking-wide text-center">
                  {winner}
                </p>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
