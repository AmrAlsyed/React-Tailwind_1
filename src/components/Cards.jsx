import React from "react";
import Card from "./Card";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <Card
          image={single}
          numOfUsers="Singe User"
          price="$149"
          storage="500 GB"
          grantedUsers="1 Granted User"
          numOfGB="2 GB"
        />
        <Card
          image={double}
          numOfUsers="Singe User"
          price="$149"
          storage="500 GB"
          grantedUsers="1 Granted User"
          numOfGB="2 GB"
          middle
        />
        <Card
          image={triple}
          numOfUsers="Singe User"
          price="$149"
          storage="500 GB"
          grantedUsers="1 Granted User"
          numOfGB="2 GB"
        />
      </div>
    </div>
  );
};

export default Cards;
