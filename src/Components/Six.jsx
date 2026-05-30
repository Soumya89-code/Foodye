import React from 'react'
import Card from './Card'
import six1 from '../assets/six1.png'
import six2 from '../assets/six2.png'
import six3 from '../assets/six3.png'


const cards = [
  {
    id: 1,
    image: six1,
    label: 'COLLECTION',
    title: '50 Mediterranean Diet Recipes You ll..',
  },
  {
    id: 2,
    image: six2,
    label: 'COLLECTION',
    title: 'Nachos, 20 Ways',
  },
  {
    id: 3,
    image: six3,
    label: 'COLLECTION',
    title: '21 Essential Italian Pastas',
  },
]

const Six = () => {
  return (
    <div className="flex w-full h-100 mt-10 overflow-hidden px-20 gap-3 justify-center items-center">
       {cards.map((card,index)=>(
        <Card key={index} card={card}/>
        ))}
    </div>
  )
}

export default Six