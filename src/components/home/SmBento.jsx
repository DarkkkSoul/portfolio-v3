import React, { useEffect, useState } from 'react'
import musicArr from '../../arrays/music';

function SmBento() {
    // time
    const [time, setTime] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toTimeString().split(' ')[0]);
        }, 1000);

        () => clearInterval(interval);
    }, []);

    const [day, setDay] = useState('');
    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const formatted = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            });
            setDay(formatted);
        };
        updateDate();
        const interval = setInterval(updateDate, 86400000);
        return () => clearInterval(interval);
    }, []);

    const [year, setYear] = useState();
    useEffect(() => {
        const updateYear = () => {
            const now = new Date();
            const formatted = now.getFullYear();
            setYear(formatted);
        };
        updateYear();
        const interval = setInterval(updateYear, 86400000);
        return () => clearInterval(interval);
    }, [])

    //music
    const [music, setMusic] = useState('');
    let [musicIndex, setMusicIndex] = useState(0);
    const handleMusic = () => {
        let next = musicIndex + 1;
        if (next > musicArr.length - 1) next = 0;
        setMusicIndex(next);
        setMusic(musicArr[next]);
    }

    return (
        <div className='sm-parent *:border *:inset-shadow-sm/20'>

            <div className='d1 flex flex-col items-center justify-evenly '>
                <a href="https://www.linkedin.com/in/maheshkgdev/" target='_blank' className='w-8'><img src="/icons/linkedin.png" /></a>
                <a href="https://github.com/darkkksoul" target='_blank' className='w-8'><img src="/icons/github.png" /></a>
                <a href="mailto:maheshh.kumar1508@gmail.com" target='_blank' className='w-8'><img src="/icons/gmail.png" /></a>
                <a href="https://drive.google.com/file/d/1dcbpIeedksKAY6yg8mwrmJIYSmBFc5R9/view?usp=sharing" target='_blank' className='w-7.5'><img src="/icons/resume.png" /></a>
            </div>

            <div className='d2 flex flex-col justify-center items-center'>
                <a onClick={handleMusic} href={music} target='_blank'>
                    <img src="/icons/music.png" className='object-cover rounded-[0.5rem]' />
                </a>
            </div>

            <div className="d3 flex items-center justify-center text-3xl font-rubik relative">
                <div className='absolute flex items-center gap-x-0.5 top-1.5 left-1'>
                    <img src="/icons/earth.png" className=' w-4 ' />
                    <div className='text-xs tracking-wide'>{day}</div>
                </div>
                {time}
                <div className='text-xs absolute bottom-1 right-1'>{year}</div>
            </div>

            <div className='d4 flex flex-col justify-center font-rubik'>
                <p className='text-sm pl-4'>I write</p>
                <p className='text-5xl underline underline-offset-4 cursor-pointer pl-6 relative'>Blogs
                    <img src="/icons/link.png" className='absolute top-1 right-2 w-3' />
                </p>
            </div>

            <div className='d5 overflow-hidden'>
                <img src="/icons/Cute.jpeg" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
export default SmBento