import React from 'react'
import stack from '../../arrays/stack.js'

function Stack() {
    return (
        <div className='flex flex-wrap gap-x-3 gap-y-2 mt-5'>
            {stack.map((item, index) => (
                <div key={index} className='border px-2 py-1 rounded-md inset-shadow-sm/12 font-inter-400 text-sm'>{item}</div>
            ))}
        </div>
    )
}

export default Stack