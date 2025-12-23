import React from 'react'

function Project({ img, title, description, isActive, stack, website, source }) {
    return (
        <div className='border rounded-xl flex flex-col'>
            <div>
                <img src={img} className='rounded-t-xl w-95 object-contain' />
            </div>
            <div className='px-4 flex flex-col gap-y-1 py-3'>
                <div className='flex items-center justify-between pr-3'>
                    <div className='text-xl font-inter-600'>{title}</div>
                    <div className='flex items-center border gap-x-1 px-2 rounded-full'>
                        {
                            isActive ? (
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            ) : (<div className='w-2 h-2 bg-red-500 rounded-full'></div>)
                        }
                        <div className='text-xs font-inter-300 whitespace-nowrap'>
                            {isActive ? 'Active' : 'Inactive'}
                        </div>
                    </div>
                </div>
                <div className='text-mg font-inter-400 mt-0.5'>{description}</div>
                <div className='flex my-1.5 flex-wrap gap-2'>
                    {stack.map((tech, index) => (
                        <span key={index} className='border rounded-sm px-2 py-1 text-xs bg-gray-100/50 font-inter-300 font-black leading-none whitespace-nowrap'>{tech}</span>
                    ))}
                </div>
                <div className='flex items-center justify-between mt-0.5'>
                    <div className='flex gap-x-2 text-md font-inter-400 *:hover:underline'>
                        <div>
                            <a href={website} target="_blank" rel="noopener noreferrer">Website</a>
                        </div>
                        <div>
                            <a href={source} target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                    <div className='font-inter-500 hover:underline cursor-pointer'>More -&gt;</div>
                </div>
            </div>
        </div>
    )
}

export default Project