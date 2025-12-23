import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import projects from '../arrays/projects';
import Project from '../components/home/Project';
import Footer from '../components/Footer';

function Projects() {
  const [impactful, setImpactful] = useState(true);
  const [fun, setFun] = useState(false);
  const [clone, setClone] = useState(false);

  const currentType = impactful ? 'impactful' : fun ? 'fun' : 'clone';

  const visibleProjects = useMemo(() => {
    return projects.filter((pro) => {
      return pro.type === currentType;
    });
  }, [currentType]);

  return (
    <div className='w-[40vw] h-full mx-auto pt-15 pb-10'>
      <Header />
      <div className='mt-16 gap-y-2 flex flex-col items-center'>
        <h1 className='text-7xl font-inter-600 tracking-wide'>Projects</h1>
        {
          impactful &&
          <p className='text-lg mt-2 font-inter-500 text-gray-600'>Built to solve real problems</p>
        }
        {
          fun &&
          <p className='text-lg mt-2 font-inter-500 text-gray-600'>Built for fun</p>
        }
        {
          clone &&
          <p className='text-lg mt-2 font-inter-500 text-gray-600'>Built to improve design sense</p>
        }

      </div>

      <div className='flex *:border *:py-1 *:px-2 gap-x-2.5 mt-11 *:rounded-lg *:cursor-pointer '>
        <button
          onClick={() => { setImpactful(true); setFun(false); setClone(false); }}
          style={{
            backgroundColor: impactful ? 'black' : '',
            color: impactful ? 'white' : '',
            fontWeight: impactful ? '500' : 'normal',
            letterSpacing: impactful ? '0.05rem' : 'normal',
          }}
        >
          Impactful
        </button>
        <button
          onClick={() => { setFun(true); setImpactful(false); setClone(false); }}
          style={{
            backgroundColor: fun ? 'black' : '',
            color: fun ? 'white' : '',
            fontWeight: fun ? '500' : 'normal',
            letterSpacing: fun ? '0.05rem' : 'normal',
          }}
        >
          Fun
        </button>
        <button
          onClick={() => { setClone(true); setImpactful(false); setFun(false); }}
          style={{
            backgroundColor: clone ? 'black' : '',
            color: clone ? 'white' : '',
            fontWeight: clone ? '500' : 'normal',
            letterSpacing: clone ? '0.05rem' : 'normal',
          }}
        >
          Clone
        </button>
      </div>

      <div className='grid grid-cols-2 gap-x-10 gap-y-7 mt-7'>
        {
          visibleProjects.length === 0 && (
            <p className="text-center mt-4 text-gray-500">No projects found for this category.</p>
          )
        }
        {
          visibleProjects.map((project) => (
            <Project key={project.id} img={project.img} title={project.title} description={project.description} isActive={project.isActive} stack={project.stack} website={project.website} source={project.source} />
          ))
        }
      </div>

      <Footer />
    </div>
  )
}

export default Projects