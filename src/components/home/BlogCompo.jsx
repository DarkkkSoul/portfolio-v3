function BlogCompo({ title, description, link }) {
    return (
        <button className='group border flex items-center justify-center p-8 rounded-lg cursor-pointer hover:scale-105 transition-all'
            onClick={() => {
                window.open(link, '_blank')
            }}>
            <div className='relative h-16 w-full perspective-[1000px]'>
                <div className='absolute inset-0 flex items-center justify-center transition-transform duration-500 transform-3d group-hover:transform-[rotateX(180deg)]'>
                    <div className='absolute inset-0 flex items-center justify-center backface-hidden'>
                        <h2 className='font-inter-600 text-lg transition-opacity duration-300 group-hover:opacity-0'>{title}</h2>
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center transform-[rotateX(180deg)] backface-hidden'>
                        <p className='font-inter-400 text-md opacity-0 transition-opacity duration-300 group-hover:opacity-100'>{description}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default BlogCompo