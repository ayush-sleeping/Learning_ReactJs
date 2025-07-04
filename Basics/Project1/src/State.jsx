import React from 'react'
import Value from './Value.jsx';

export default function State() {
    var [a, b] = React.useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='flex flex-col items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500'>
            <div className='flex items-center gap-4 mb-4'>
                <h1 className="text-3xl font-bold text-white">{a}</h1>
                <h3 className="text-2xl font-semibold text-white">State Component</h3>
            </div>
            <button onClick={() => b(a + 1)} className='bg-white text-black px-4 py-2 rounded'>Increment</button>
        </div>

        <Value data={a} />
    </div>
  )
}
