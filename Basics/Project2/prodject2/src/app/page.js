"use client";
import React, { useState } from 'react'

const page = () => {
    const [marks, setMarks] = useState(80)

    return (
        <>
            <h1>
                Current Marks: {marks}
            </h1>
            <button onClick={() => { setMarks(33) }} className="mt-2 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700">Click Me</button>
        </>
    )
}

export default page
