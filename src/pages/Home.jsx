import React from 'react'
import Header from '../components/Header'
import Intro from '../components/home/Intro'
import NPM from '../components/home/NPM'
import expirence from '../arrays/experience.js'
import Expirence from '../components/home/Expirence.jsx'
import Bento from '../components/home/Bento.jsx'
import Stack from '../components/home/Stack.jsx'
import Footer from '../components/Footer.jsx'
import Projects from './Projects.jsx'
import Blogs from './Blogs.jsx'

function Home() {
    return (
        <div className='w-[92vw] sm:w-[85vw] lg:w-[40vw] h-full mx-auto pt-15 pb-10'>
            <Header />

            <div className='mt-16'>
                <Intro />
            </div>

            <div className='flex justify-center items-center mt-8 sm:mt-10'>
                <NPM />
            </div>

            <div id="work" className='mt-9 sm:mt-10 scroll-mt-28'>
                <h3 className='sm:text-2xl text-xl font-bold font-inter-700 text-black/90'>Professional Experience</h3>
                {
                    expirence.map((item) => (
                        <Expirence key={item.id} imageUrl={item.imageUrl} companyName={item.companyName} position={item.position} startDate={item.startDate} endDate={item.endDate} type={item.type} place={item.place} contribution={item.contribution} />
                    ))
                }
            </div>

            <div id="projects" className='mt-9 scroll-mt-28'>
                <Projects />
            </div>

            <div className="mt-14 text-center font-inter-400">
                <p className="sm:text-lg text-md">
                    I love designing bento styled websites, just like how{" "}
                    <span className="font-inter-700">Rengoku</span> loves to eat{" "}
                    <span className="font-inter-400-italic">ekiben.</span>
                    <img
                        src="/icons/sound.png"
                        alt="sound icon"
                        className="inline-block w-6 ml-1 align-text-bottom cursor-pointer"
                    />
                </p>
            </div>

            <div className='mt-14 sm:flex justify-center items-center hidden'>
                <Bento />
            </div>

            <div className='sm:mt-14 mt-11'>
                <h3 className='sm:text-2xl text-xl font-inter-700 text-black/90'>Stack I primarily use</h3>
                <Stack />
            </div>

            <div className='sm:mt-14 mt-11'>
                <h3 className='sm:text-2xl text-xl font-inter-700 text-black/90'>Little more about myself</h3>
                <div className='mt-2 font-inter-400 text-md sm:text-lg flex flex-col gap-y-1'>
                    <div>
                        I started my web development journey around <span className='font-inter-400-italic'>Septermber 2024</span>, which started as a curosity to built an web application turned out to be my main stream focus where I started learning tech from <span className='font-inter-700'>first principles</span> (unknowingly) by building projects which made my foundations strong.
                    </div>
                    <div>
                        <span className='font-inter-400-italic'>This technique</span> gave me confidence that I can learn any new things within days or so.
                    </div>
                    <div>
                        I work solo and fast, mostly with <span className='font-inter-700'>Javascript frameworks</span>. You will see me posting about backend designing and exploring new technologies publically.
                    </div>
                    <div>
                        <span className='font-inter-400-italic'>Currently, </span>I'm deep diving into React and planning to shift my career towards Gen AI where I can integrate AI to my projects.
                    </div>
                </div>
            </div>

            <div id="blogs" className='sm:mt-10 mt-8 scroll-mt-28'>
                <h3 className='sm:text-2xl text-xl font-bold font-inter-700 text-black/90'>
                    I share my stories & writtings too
                </h3>
                <Blogs />
            </div>

            <div className='sm:mt-14 mt-10'>
                <h3 className='sm:text-2xl text-xl font-bold font-inter-700 text-black/90'>Book a Call</h3>
                <p className='mt-2 font-inter-400 text-md sm:text-lg'>Have an idea? I can bring it live within weeks. Looking for a person who has immense attraction towards coding? I'm here. I'm available for internships & freelancing gigs.</p>
                <p className='font-inter-400 text-base sm:text-lg'>I can build from fancy websites to lame (like this one) or, are you confused with your requirements? Let's have a talk and I'll help you out.</p>
                <p className='font-inter-700 text-lg sm:text-xl text-black/85'>I code first, talk later.</p>
            </div>

            <Footer />

        </div>
    )
}

export default Home