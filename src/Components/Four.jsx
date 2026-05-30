import React from 'react'
import foue1 from '../assets/four1.png'
import foue2 from '../assets/four2.png'
import foue3 from '../assets/four3.png'
import foue4 from '../assets/four4.png'
import foue5 from '../assets/four5.png'
import foue6 from '../assets/four6.png'
 const food =[
    {
        id:1,
        image:foue1,
        title:"Comfort food classics"
    },
    {
        id:2,
        image:foue2,
        title:"international eats"
    },
    {
        id:3,
        image:foue3,
        title:"breakfast & Brunch"
    },
    {
        id:4,
        image:foue4,
        title:"Community Picks"
    },
    {
        id:5,
        image:foue5,
        title:"Quick & Easy Cover"
    },
    {
        id:6,
        image:foue6,
        title:"Copycat Recipes"
    }
 ]

const Four = () => {
  return (
    <div className='flex flex-row gap-3 mx-20 mt-10'>
        {food.map((food) => (
        <div className='flex justify-center items-center flex-col' key={food.id}>
            
            <img src={food.image} alt="" className='w-50 h-50 rounded-full'  />
        <h1 className='uppercase text-center'>{food.title}</h1>
        </div>
        ))}
        
    </div>
  )
}

export default Four