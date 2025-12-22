import React from 'react'
import Header from '../components/Header'
import Intro from '../components/home/Intro'
import NPM from '../components/home/NPM'
import expirence from '../arrays/experience.js'
import Expirence from '../components/home/Expirence.jsx'
import Bento from '../components/home/Bento.jsx'

function Home() {
    return (
        <div className='w-[40vw] h-screen mx-auto py-8'>
            <Header />

            <div className='mt-16'>
                <Intro />
            </div>

            <div className='flex justify-center items-center mt-14'>
                <NPM />
            </div>

            <div className='mt-14'>
                <h3 className='text-2xl font-bold mt-10 font-inter-700 text-black/90'>Professional Experience</h3>
                {expirence.map((item) => (
                    <Expirence key={item.id} imageUrl={item.imageUrl} companyName={item.companyName} position={item.position} startDate={item.startDate} endDate={item.endDate} type={item.type} place={item.place} contribution={item.contribution} />
                ))}
            </div>

            <div className='mt-14 text-center flex gap-x-1 items-center font-inter-400'>
                <p className='text-lg'>I love designing bento styled websites, just like how <span className='font-inter-700'>Rengoku</span> loves to eat <span className='font-inter-400-italic'>ekiben.</span></p>
                <div><img src="/icons/sound.png" className='w-6 cursor-pointer' /></div>
            </div>

            <div className='mt-14'>
                <Bento />
            </div>
        </div>
    )
}

export default Home