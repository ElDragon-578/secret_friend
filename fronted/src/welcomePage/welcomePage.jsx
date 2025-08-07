import { useEffect, useState } from "react";
import secretFriendImage from "/secret_friend2.png"

export function WelcomePage() {
  const [arrayFriends, setArrysFriends] = useState([
  ]);

  const [inputFriend, setInputFriend] = useState("");

  const radius = 250; //circle radius

  const handleChange = (e) => {
    setInputFriend(e.target.value)
  };

  // useEffect(()=>{
  //   console.log(inputFriend)
  // },[inputFriend])

  const handlePush = (e) => {
    setArrysFriends((prev) =>[...prev, inputFriend])
    setInputFriend("")
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="relative w-[300px] h-screen rounded-full flex items-center justify-center">
        <div className="w-auto absolute flex flex-col items-center gap-2">
          <img src={secretFriendImage} alt="" />
          <input
            type="text"
            className="w-60 px-2 py-1 rounded-md border border-gray-400"
            placeholder="Escribe el nombre de un amigo"
            onChange={handleChange}
            value={inputFriend}
          />
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
            onClick={handlePush}
          >
            Enviar
          </button>
        </div>

        {arrayFriends?.map((friend, index) => {
          const angle = (index / arrayFriends.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={index}
              className="w-20 h-20 rounded-full bg-blue-950 text-white flex items-center justify-center absolute transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <h1 className="text-sm text-center">{friend}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
