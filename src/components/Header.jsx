import React from 'react'
import { Link } from 'react-router'

function Header() {
    const headerName = ["<Work/>", "<Projects/>", "<Blogs/>", "</>"]
    return (
        <div className='border flex flex-row justify-between items-center px-4 py-2 rounded-lg font-inter-500 tracking-wide'>
            <div className='rounded-2xl'>
                <img src="/icons/Dark-Soul.png" className='w-10 rounded-lg' />
            </div>
            <div className='flex flex-row justify-evenly items-center gap-x-2.5 text-lg'>
                <Link to="/work">{headerName[0]}</Link>
                <Link to="/projects">{headerName[1]}</Link>
                <Link to="/blogs">{headerName[2]}</Link>
                <Link to="/snippets">{headerName[3]}</Link>
                <Link to="/social">
                    <img src="/icons/social.png" className='w-7' />
                </Link>
            </div>
        </div>
    )
}

export default Header