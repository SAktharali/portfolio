import React from 'react'
import resumeImg from '../assets/resume.jpg';

const Resume = () => {
  const config={
    link:'https://drive.google.com/file/d/1EC4zkHYXDYMT2v-abo5EvUrEFeKX68RZ/view?usp=sharing'
  }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={resumeImg} alt="resumeImage" title='resumeImage' />
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary font-bold w-[140px] mb-5'>Resume</h1>
        <p className='pb-5'>You can view my resume <a href={config.link} target='_blank' className='btn'>Download</a></p>
    </div>
    </div>
</section>
  )
}

export default Resume