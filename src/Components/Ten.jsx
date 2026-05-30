import React from 'react'

const Ten = () => {
  return (
    <div className='w-full h-50 flex flex-col justify-center items-center gap-5 mt-10  bg-gray-100'>
        <h1 className='Bold text-3xl'>Find More Recipes</h1>
        <input type="text" name="" id="" placeholder='I am craving... ' className='rounded-full w-200 py-3 pl-5 border-2 border-black- ' />
        <button className='bg-amber-300 rounded-2xl w-80 py-2 cursor-pointer' >Search</button>
    </div>
  )
}

export default Ten