import React from 'react'

const SmallCsrd = ({card}) => {
  return (
         <div className='h-80 w-70 "bg-white rounded-lg shadow p-4 mt-5 mb-5 flex flex-col'>
          <img src={card.image} className="h-60" alt="" />
          <h1 className="uppercase text-center mt-5">{card.title}</h1>
        </div>
  )
}

export default SmallCsrd