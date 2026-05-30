import React from 'react'

const Card = ({ card }) => {
  return (
    <div className='h-80 w-3xl'>
        <div
          className="relative flex-1 bg-cover bg-center cursor-pointer overflow-hidden group h-80"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-8 left-6 right-6">
            <p className="text-gray-300 text-sm font-semibold tracking-widest mb-2 uppercase">
              {card.label}
            </p>
            <h2 className="text-white text-3xl font-black uppercase leading-tight">
              {card.title}
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Card