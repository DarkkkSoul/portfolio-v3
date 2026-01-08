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
    <div>
      <div className='flex flex-row gap-x-2 items-center'>
        <div className='text-2xl font-bold font-inter-700 text-black/90'>Projects I've built</div>
        <div className='text-2xl font-inter-500 text-gray-600'>
          {
            impactful &&
            <p>to solve real problems</p>
          }
          {
            fun &&
            <p>for fun</p>
          }
          {
            clone &&
            <p>to improve design sense</p>
          }
        </div>
      </div>

      <div className='flex *:border *:py-1 *:px-2 gap-x-2.5 mt-4 *:rounded-lg *:cursor-pointer *:text-sm'>
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

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 mt-7'>
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

      {/* <Footer /> */}
    </div >
  )
}

export default Projects