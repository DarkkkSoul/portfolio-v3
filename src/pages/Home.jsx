import React from 'react'
import Header from '../components/Header'
import Intro from '../components/home/Intro'
import NPM from '../components/home/NPM'
import expirence from '../arrays/experience.js'
import Expirence from '../components/home/Expirence.jsx'
import Bento from '../components/home/Bento.jsx'
import Stack from '../components/home/Stack.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
    return (
        <div className='w-[40vw] h-full mx-auto pt-15 pb-10'>
            <Header />

            <div className='mt-16'>
                <Intro />
            </div>

            <div className='flex justify-center items-center mt-12'>
                <NPM />
            </div>

            <div className='mt-15'>
                <h3 className='text-2xl font-bold font-inter-700 text-black/90'>Professional Experience</h3>
                {expirence.map((item) => (
                    <Expirence key={item.id} imageUrl={item.imageUrl} companyName={item.companyName} position={item.position} startDate={item.startDate} endDate={item.endDate} type={item.type} place={item.place} contribution={item.contribution} />
                ))}
            </div>

            <div className='mt-14 text-center flex gap-x-1 items-center font-inter-400'>
                <p className='text-lg'>I love designing bento styled websites, just like how <span className='font-inter-700'>Rengoku</span> loves to eat <span className='font-inter-400-italic'>ekiben.</span></p>
                <div><img src="/icons/sound.png" className='w-6 cursor-pointer' /></div>
            </div>

            <div className='mt-14 flex justify-center items-center'>
                <Bento />
            </div>

            <div className='mt-14'>
                <h3 className='text-2xl font-bold font-inter-700 text-black/90'>Little more about myself</h3>
            </div>


            <div className='mt-14'>
                <h3 className='text-2xl font-bold font-inter-700 text-black/90'>Stack I primarily use</h3>
                <Stack />
            </div>

            <div className='mt-14'>
                <h3 className='text-2xl font-bold font-inter-700 text-black/90'>Book a Call</h3>
                <p className='mt-2 font-inter-400 text-lg'>Have an idea? I can bring it live within weeks. Looking for a person who has immense attraction towards coding? I'm here. I'm available for internships & freelancing gigs.</p>
                <p className='font-inter-400 text-lg'>I can build from fancy websites to lame (like this one) or, are you confused with your requirements? Let's have a talk and I'll help you out.</p>
                <p className='font-inter-700 text-xl text-black/85'>I code first, talk later.</p>
            </div>

            <Footer />

        </div>
    )
}

export default Home