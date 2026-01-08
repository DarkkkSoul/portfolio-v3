function Intro() {
    return (
        <div className='flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 gap-x-10 items-start sm:items-center'>
            <div>
                <img src="/profile.png" className='sm:w-45 w-36 rounded-4xl' />
            </div>
            <div className='flex-1 min-w-0 wrap-break-words sm:text-xl text-lg gap-y-2 flex flex-col'>
                <div className="text-2xl sm:text-3xl font-inter-500">私は Mahesh a.k.a <span className="text-gray-700/90 font-normal">Kiouni</span>,</div>
                <div className="font-inter-400">A <span className="font-bold font-inter-700">full stack developer</span>, based in India. I build interactive & scalable products, I also love structuring complex backends.</div>
            </div>
        </div>
    )
}

export default Intro