function Expirence({ imageUrl, companyName, position, startDate, endDate, type, place, contribution }) {
    return (
        <div className=' flex flex-col justify-center gap-y-2 mt-5'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-3'>
                <div className='flex gap-x-3 items-center justify-center'>
                    <div>
                        <img src={imageUrl} className='w-11 border rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-inter-600 text-xl text-black/90'>{companyName}</div>
                        <div className='text-sm font-inter-200 tracking-wide'>{position}</div>
                    </div>
                </div>
                <div className='font-inter-300 text-md sm:text-right'>
                    <div>{startDate} - {endDate}</div>
                    <div className='sm:flex sm:justify-end'>{type} ({place})</div>
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