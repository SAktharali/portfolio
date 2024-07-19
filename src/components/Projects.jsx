import React from 'react'
import eWebsiteImg from '../assets/ecommerce-websites.jpg'
import formValidationImg from '../assets/form-validation.jpg'
import docWebsiteImg from '../assets/Medcare.jpg'
const Projects = () => {
    const config={
        projects:[
            {
                id:1,
                image:eWebsiteImg,
                description:'A Static E-commerce Website created with HTML,CSS,Bootstrap.',
                link:'https://github.com/SAktharali/groceryproject'
            },
            {
                id:2,
                image:formValidationImg,
                description:'Form Validation created with the Javascript.',
                link:'https://github.com/SAktharali/form-validation'
            },
            {
                id:3,
                image:docWebsiteImg,
                description:'Doctor Website created with MERN Stack.',
                link:'https://github.com/SAktharali/reactdocwebsite'

            },
       
        ]
    }
  return (
    <section id='projects' className='flex flex-col py-20 px-5 bg-primary text-white justify-center'>
        <div className='w-full'>
        <div className='flex flex-col px-10 py-10'>
        <h1 className='text-4xl border-b-4 border-secondary font-bold w-[140px] mb-5'>Projects</h1>
        <p>These are some of my best projects. I have built these with React,MERN and HTML,CSS,bootstrap and Javascript.
            Check them out.
        </p>
        </div>
        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
          {config.projects.map((project)=>(
              <div className='relative' key={project.id}>
              <img src={project.image} className='h-[200px] w-[500px]' alt="ecommerce" title='ecommerce'/>
              <div className='project-desc'>
                  <p className='text-center px-2 py-10'>{project.description}</p>
              <div className='flex justify-center'>
              <a className='btn' target='_blank' href={project.link}>View Project</a>
              </div>
              </div>
                  </div>
          ))}
          
        </div>
        </div>
    </section>
  )
}

export default Projects