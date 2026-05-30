import React from 'react'
import third1 from '../assets/third1.png'
import third2 from '../assets/third2.png'
import third3 from '../assets/third3.png'

import Card from './Card'

const cards = [
  {
    id: 1,
    image: third1,
    label: 'COLLECTION',
    title: 'MOST-AMAZING RECIPES...',
  },
  {
    id: 2,
    image: third2,
    label: 'COLLECTION',
    title: '40+ QUICK & EASY PASTA RECIPES',
  },
  {
    id: 3,
    image: third3,
    label: 'COLLECTION',
    title: '21 RESTAURANT MEALS M...',
  },
]

const CollectionCards = () => {
  return (
    <div className="flex w-full h-100 mt-10 overflow-hidden px-20 gap-3 justify-center items-center">
      {cards.map(( card, index ) => (
        <Card key={index} card={card}/>
      ))}
    </div>
  )
}

export default CollectionCards