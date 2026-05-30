import React from "react";
import five1 from "../assets/five1.png";
import five2 from "../assets/five2.png";
import five3 from "../assets/five3.png";
import five4 from "../assets/five4.png";
import SmallCsrd from "./SmallCsrd";

const card = [
  {
    id: 1,
    image: five1,
    title: "Tender pot roast",
  },
  {
    id: 2,
    image: five2,
    title: "Chocolate Mousse",
  },
  {
    id: 3,
    image: five3,
    title: "Homemade Chicken Noodle Soup",
  },
  {
    id: 4,
    image: five4,
    title: "Twice-Baked Mashed Potatoes",
  },
];
const Five = () => {
  return (
    <div className="flex flex-row justify-between mx-20">
      {card.map((card, index) => (
       <SmallCsrd card={card} key={index}/>
      ))}
    </div>
  );
};

export default Five;
