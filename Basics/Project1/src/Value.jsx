import React from 'react'

export default function Value({data}) {
  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='flex items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500'>
            <h1 className="text-3xl font-bold text-white">{data} </h1>
        </div>
    </div>
  )
}
