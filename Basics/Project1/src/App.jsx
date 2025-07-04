import React, { useState } from 'react'
import Products from './Products.jsx';
import State from './State.jsx';

export default function App() {
  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='flex items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500'>
            <h1 className="text-3xl font-bold text-white">Hello World!</h1>
        </div>
        <Products />
        <State />
    </div>
  )
}
