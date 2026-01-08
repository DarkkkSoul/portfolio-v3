import React from 'react'
import stack from '../../arrays/stack.js'

function Stack() {
    return (
        <div className='flex flex-wrap gap-x-3 gap-y-2 sm:mt-5 mt-4'>
            {stack.map((item, index) => (
                <div key={index} className='border px-2 py-1 rounded-md inset-shadow-sm/12 font-inter-400 sm:text-sm text-xs'>{item}</div>
            ))}
        </div>
    )
}

export default Stack