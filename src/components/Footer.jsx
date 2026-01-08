import React from 'react'

function Footer() {
    const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 10519200);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='border-t mt-15 border-t-black/70 font-inter-400'>
            <div className='flex flex-col sm:flex-row justify-around items-center mt-5 gap-y-2'>
                <div>Peace Out!</div>
                <div>&copy; {currentYear}. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer