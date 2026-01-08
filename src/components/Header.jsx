import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

function Header() {
    const headerName = ["<Work/>", "<Projects/>", "<Blogs/>", "</>"]

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    function scrollToSection(id) {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    function handleNavClick(id) {
        setIsOpen(false)

        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                scrollToSection(id)
            }, 0)
            return
        }

        scrollToSection(id)
    }

    return (
        <div className='fixed top-8 left-1/2 -translate-x-1/2 w-[92vw] sm:w-[85vw] lg:w-[40vw] bg-[#DFDFDD] z-50 border flex flex-row justify-between items-center px-4 py-2 rounded-lg font-inter-500 tracking-wide inset-shadow-sm/13'>
            <Link to="/" className='rounded-2xl'>
                <img src="/icons/Dark-Soul.png" className='w-10 rounded-lg' />
            </Link>

            <div className='hidden lg:flex flex-row justify-evenly items-center gap-x-2.5 text-lg'>
                <button onClick={() => handleNavClick('work')} className='cursor-pointer'>{headerName[0]}</button>
                <button onClick={() => handleNavClick('projects')} className='cursor-pointer'>{headerName[1]}</button>
                <button onClick={() => handleNavClick('blogs')} className='cursor-pointer'>{headerName[2]}</button>
                <Link to="/snippets">{headerName[3]}</Link>
            </div>

            <div className='lg:hidden flex items-center'>
                <button onClick={() => setIsOpen(!isOpen)} className='border px-3 py-1 rounded-lg font-inter-500'>
                    Menu
                </button>
            </div>

            {
                isOpen && (
                    <div className='absolute top-14 right-0 w-full bg-[#DFDFDD] border rounded-lg px-4 py-3 flex flex-col gap-y-2 lg:hidden'>
                        <button onClick={() => handleNavClick('work')} className='text-lg text-left'>{headerName[0]}</button>
                        <button onClick={() => handleNavClick('projects')} className='text-lg text-left'>{headerName[1]}</button>
                        <button onClick={() => handleNavClick('blogs')} className='text-lg text-left'>{headerName[2]}</button>
                        <Link to="/snippets" onClick={() => setIsOpen(false)} className='text-lg'>{headerName[3]}</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Header