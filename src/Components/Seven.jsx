import React from 'react'
import seven1 from '../assets/seven1.png'
import seven2 from '../assets/seven2.png'
import seven3 from '../assets/seven3.png'
import seven4 from '../assets/seven4.png'
import SmallCsrd from './SmallCsrd'
const card = [
  {
    id: 1,
    image: seven1,
    title: "Chicken Tikka Masala",
  },
  {
    id: 2,
    image: seven2,
    title: "Vegan Bacon",
  },
  {
    id: 3,
    image: seven3,
    title: "Copycat McDonald's Big Mac Sauce",
  },
  {
    id: 4,
    image: seven4,
    title: "Crock-Pot Beef Roast",
  },
];

const Seven = () => {
  return (
    <div className="flex flex-row justify-between mx-20">
        {card.map((card, index) => (
            <SmallCsrd card={card} key={index}/>
        ))}
    </div>
  )
}

export default Seven