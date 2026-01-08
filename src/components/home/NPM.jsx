import React from 'react'

function NPM() {
    return (
        <div className='flex flex-col justify-center items-center gap-y-4'>
            <p className='font-inter-400 text-md sm:text-xl'>
                Hey! My visitor try out my npm package
            </p>
            <div className='flex flex-row items-center justify-center border gap-x-3 w-fit rounded-lg pl-5 pr-4 py-2.5'>
                <div className='font-mono sm:text-lg text-sm'>npm i todo-in-cli</div>
                <button><img src="/icons/copy.png" className='sm:w-6 w-4' onClick={() => navigator.clipboard.writeText("npm i todo-in-cli")}/></button>
            </div>
        </div>
    )
}

export default NPM