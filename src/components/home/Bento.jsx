import React, { useState, useEffect } from 'react'
import '../../styles/bento.css'
import musicArr from '../../arrays/music'
import social from '../../arrays/social';
import { useNavigate } from 'react-router';

function Bento() {

    // time
    const [time, setTime] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toTimeString().split(' ')[0]);
        }, 1000);

        return () => clearInterval(interval);
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

    const [music, setMusic] = useState('');
    let [musicIndex, setMusicIndex] = useState(0);
    const handleMusic = () => {
        let next = musicIndex + 1;
        if (next > musicArr.length - 1) next = 0;
        setMusicIndex(next);
        setMusic(musicArr[next]);
    }

    const navigate = useNavigate();

    return (
        <div className="parent relative *:border *:inset-shadow-sm/20 font-inter-400">

            <div className="div1 px-2 flex flex-col py-3 gap-y-2">
                <div className="font-inter-700 text-center">Tools I use</div>
                <ul className="list-disc list-inside space-y-0.5 text-sm pl-2">
                    <li className='hover:underline'>
                        <a href="https://www.figma.com" target='_blank'>Figma</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://windsurf.com/" target='_blank'>Windsurf</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://kiro.dev/" target='_blank'>Kiro</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://insomnia.rest/" target='_blank'>Insomnia</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://www.tldraw.com/" target='_blank'>tlDraw</a>
                    </li>
                </ul>
            </div>

            <div className='div2 flex flex-col justify-center items-center cursor-pointer'>
                <a onClick={handleMusic} href={music} target='_blank'>
                    <img src="/icons/music.png" className='object-cover rounded-lg' />
                </a>
            </div>

            <div className="div3 flex items-center justify-center text-4xl relative">
                <div className='absolute flex items-center gap-x-1.5 top-1.5 left-1.5'>
                    <img src="/icons/earth.png" className=' w-5 ' />
                    <div className='text-xs tracking-wide font-inter-500'>{day}</div>
                </div>
                {time}
                <div className='text-xs absolute bottom-1.5 right-1.5 font-inter-500'>{year}</div>
            </div>

            <div className="div4 flex flex-col justify-center">
                <div className='flex px-1 items-center justify-evenly relative'>
                    {social.map((item) => (
                        <a href={item.link} target='_blank' className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src={item.img} /></a>
                    ))}
                </div>
            </div>

            <div className='div5 flex flex-col justify-center'>
                <p className='text-lg pl-6 font-inter-500'>I write</p>
                <p className='text-7xl underline underline-offset-4 cursor-pointer pl-11 relative font-inter-600' onClick={()=>navigate('/blogs')}>Blogs
                    <img src="/icons/link.png" className='absolute top-2 right-7 w-4' />
                </p>
            </div>

            <div className='div6 overflow-hidden'>
                <img src="/icons/Cute.jpeg" className='w-full h-full object-cover' />
            </div>
        </div>


    )
}

export default Bento