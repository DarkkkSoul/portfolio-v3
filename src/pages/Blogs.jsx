import React from 'react'
import Header from '../components/Header'
import blogs from '../arrays/blogs'
import BlogCompo from '../components/home/BlogCompo'

function Blogs() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8'>
      {
        blogs.map((b) => {
          return <BlogCompo key={b.id} title={b.title} description={b.description} link={b.link} />
        })
      }
    </div>
  )
}

export default Blogs