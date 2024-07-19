import React from 'react'
import aboutImg from '../assets/about.png';
const About = () => {
  const config={
line1:'Hi My Name is S Aktharali. I am an aspiring Full Stack Developer.I built user friendly and responsive Websites with Frontend Technologies.',
line2:'I am proficient in Frontend Skills like HTML,CSS,Bootstrap,Tailwind CSS,Javascript,React.js.',
line3:'some basic knowledge in backend skills like Node.js,Express.js,MongoDB,PHP,Mysql'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={aboutImg} alt="aboutImage" title='aboutImage' />
        </div>
        <div className='md:w-1/2 flex justify-center pb-5'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary font-bold w-[170px] mb-5'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>             
        <p>{config.line3}</p> 
        </div>
        </div>
    </section>
  )
}

export default About