import React from "react";

const Card = ({
  image,
  numOfUsers,
  price,
  storage,
  grantedUsers,
  numOfGB,
  middle,
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 ${
        middle ? "my-8 md:my-0 bg-gray-100" : "my-4"
      } rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={image}
        alt="single"
      />
      <h2 className="text-2xl font-bold text-center py-8">{numOfUsers}</h2>
      <p className="text-center text-4xl font-bold ">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} Storage</p>
        <p className="py-2 border-b mx-8 ">{grantedUsers}</p>
        <p className="py-2 border-b mx-8 ">Send up to {numOfGB}</p>
      </div>
      <button
        className={` ${
          middle ? "bg-black text-[#00df9a]" : "bg-[#00df9a] text-black"
        } w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3 `}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
