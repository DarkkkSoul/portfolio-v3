function Expirence({ imageUrl, companyName, position, startDate, endDate, type, place, contribution }) {
    return (
        <div className=' flex flex-col justify-center gap-y-2 mt-5'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-x-3 items-center justify-center'>
                    <div>
                        <img src={imageUrl} className='w-11 border rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-inter-600 text-xl text-black/90'>{companyName}</div>
                        <div className='text-sm font-inter-200 tracking-wide'>{position}</div>
                    </div>
                </div>
                <div className='font-inter-300 text-md'>
                    <div>{startDate} - {endDate}</div>
                    <div className='flex justify-end'>{type} ({place})</div>
                </div>
            </div>
            <div className='font-inter-400 text-black/80 text-lg px-6'>
                {contribution.map((item) => (
                    <li>{item}</li>
                ))}
            </div>
        </div>
    )
}

export default Expirence