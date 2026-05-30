import React from 'react'
import nine1 from '../assets/nine1.png'
import nine2 from '../assets/nine2.png'
import nine3 from '../assets/nine3.png'
import nine4 from '../assets/nine4.png'
import nine5 from '../assets/nine5.png'
import nine6 from '../assets/nine6.png'
import nine7 from '../assets/nine7.png'
import nine8 from '../assets/nine8.png'
import nine9 from '../assets/nine9.png'
import nine10 from '../assets/nine10.png'
import nine11 from '../assets/nine11.png'
import nine12 from '../assets/nine12.png'
import SmallCsrd from './SmallCsrd'

const card = [
  {
    id: 1,
    image: nine1,
    title: "Oven-Baked Ribs",
  },
  {
    id: 2,
    image: nine2,
    title: "Mozzarella Sticks",
  },
  {
    id: 3,
    image: nine3,
    title: "5 Minute Vegan Pancakes",
  },
  {
    id: 4,
    image: nine4,
    title: "Shakshuka",
  },
    {
    id: 5,
    image: nine5,
    title: "Simple Oven-Baked Sea Bass",
  },
  {
    id: 6,
    image: nine6,
    title: "Beef & Broccoli Stir-Fry",
  },
  {
    id: 7,
    image: nine7,
    title: "Fajitas",
  },
  {
    id: 8,
    image: nine8,
    title: "Whipped Cream Frosting",
  },
    {
    id: 9,
    image: nine9,
    title: "Restaurant Teriyaki Sauce",
  },
  {
    id: 10,
    image: nine10,
    title: "Skyline Chili",
  },
  {
    id: 11,
    image: nine11,
    title: "Banana Nut Bread",
  },
  {
    id: 12,
    image: nine12,
    title: "Award Winning Chili",
  },
];

const Nine = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-3 mx-20">
        {card.map(( card , index )=>(
          <SmallCsrd card={card} key={index}/>
        ))}
    </div>
  )
}

export default Nine