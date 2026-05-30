import React from 'react'

const ReviwBox = () => {
  return (
    <div>

        <div className="bg-white rounded-lg shadow p-4 flex-1 flex flex-col justify-between">


          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl">
                🍔
              </div>
              <p className="text-sm">
                <span className="text-blue-600 font-bold">reac810</span>
                <span className="text-gray-700"> reviewed </span>
                <span className="text-blue-600 font-bold">Kosher Perfect Matzo Balls</span>
              </p>
            </div>

            <div className="flex gap-1 text-red-500 text-2xl mb-3">
              <span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-gray-300">★</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
              The Matzoh Balls were very good - I used fresh parsley and chicken schmaltz
              (I usually use veg oil, but I didn't have any). I didn't have any dill either,
              but I would definitely use some fresh dill next time! Glad to have tried these
              and I will plan...
            </p>
          </div>

          <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
            <span className="font-semibold tracking-wide">4 HOURS AGO</span>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 font-semibold hover:text-blue-500 transition">REPLY</button>
              <button className="hover:text-red-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReviwBox